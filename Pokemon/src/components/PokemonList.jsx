import './../css/pokemonList.css'
import './../css/team.css'
import { useEffect, useState } from "react";


const PokemonList = ({ pokemons, setPokemons, teamMembers, setTeamMembers, addTeamMember }) => {
	const [query, setQuery] = useState("");
	const [pokeInfo, setPokeInfo] = useState([])

	//sätter input till lower case
	const inputHandler = (input) => {
		let inputAsString = input.target.value.toString();
		let lowerCased = inputAsString.toLowerCase();
		setQuery(lowerCased)
	}

	//hämtar alla pokemons som matchar söksträngen 
	const filteredList = pokemons.filter(pokemon => {
		if (query === "") {
			return true;
		}
		else if (pokemon.name.toLowerCase().includes(query)) {
			return true;
		}
		else {
			return false;
		}
	})

	return (
		<div className="team-container">
			<h1>List of available Pokémons</h1>
			<input
				className="search-bar"
				placeholder="Enter name of the Pokémon"
				type="text"
				onChange={inputHandler}
			/>
			<ul className="team-member-card">
				{filteredList.map((pokemon) => (
					<li key={pokemon.id}>
						<p>{pokemon.name}</p>
						<p>{"#" + pokemon.id}</p>
						<img src={pokemon.img} alt={`could not load picture of ${pokemon.name}`} />
						
						
						<button
							className="add-to-team-btn"
							onClick={() => {
								addTeamMember(pokemon)
								alert(`${pokemon.name} added to your team!`)
							}}>Add to team
						</button>
					</li>))}
			</ul>
		</div>
	)
}

export default PokemonList
