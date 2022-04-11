//inspiration till sökbar-funktionen hämtats från: https://blog.logrocket.com/create-search-bar-react-from-scratch/

import { useState } from "react";
import Team from './Team'

const PokemonList = ({ pokemons }) => {
	const [query, setQuery] = useState("");

	//sätter input till lower case
	const inputHandler = (input) => { 
		let inputAsString = input.target.value.toString();
		let lowerCased = inputAsString.toLowerCase();	
		setQuery(lowerCased)
	}

	//hämtar alla pokemons som matchar söksträngen
	const filteredList = pokemons.filter(pokemon => {
		if(query === "") {
			return true;
		}
		else if (pokemon.name.toLowerCase().includes(query)){
			return true;
		}
		else {
			return false;	
		}
	}) 

	//lägger till Pokemon i teamet
	const addToTeam = (pokemon, team) => {
		let newTeam = [...team, pokemon];
		return newTeam;
	}

	//kollar ifall Pokemon redan finns i teamet
	const isAlreadyInTeam = (team, teamMember) => {
		if(team.includes(teamMember)){
			return (
				<div>{'This pokemon is already in your team!'}</div>
			)
		}
		
	}

	//tar bort från listan
	const takeFromList = () => {

	}

	return(
		<div className="list-container">
			<h1 className="list-header">List of available Pokemons</h1>
			<input placeholder="Enter name of the Pokemon" type="text" onChange={inputHandler} />
			<ul> 
				{filteredList.map((pokemon) => (
				<li key={pokemon.id}>
					<img src={pokemon.img} alt={pokemon.name} />
					<p>{pokemon.name}</p>
					<button className="add-to-team-button" onClick={
						addToTeam(pokemon, team)
					}>Add to your team</button>
					</li>))}
			</ul>
		</div>
	)
}
export default PokemonList
