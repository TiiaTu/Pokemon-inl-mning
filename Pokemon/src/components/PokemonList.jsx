import '../css/pokemonList.css'
import { useEffect, useState } from "react";
import '../css/test.css'



const PokemonList = ({ pokemons, setPokemons, teamMembers, setTeamMembers, addTeamMember }) => {
	const [query, setQuery] = useState("");

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
		<div className="pokemon-container">
			<h1>List of available Pokémons</h1>
			<input
				className="search-bar"
				placeholder="Enter name of the Pokémon"
				type="text"
				onChange={inputHandler}
			/>
			<ul className="pokemon-card">
				{filteredList?
				(filteredList.map((pokemon) => (
					<li key={(pokemon.id)}>
						<img src={pokemon.img} alt={`could not load picture of ${pokemon.name}`} />
						<p>{pokemon.name}</p>
						<p>{"#" + pokemon.id}</p>
						
						<button
							className="add-to-team-btn"
							onClick={() => {
								addTeamMember(pokemon)
								alert(`${pokemon.name} added to your team!`)
							}}>Catch
						</button>
					</li>))) : <p>No results</p>}
					
			</ul>
		</div>
	)
}

export default PokemonList
