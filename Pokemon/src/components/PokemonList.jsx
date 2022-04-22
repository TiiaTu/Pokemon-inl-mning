//inspiration till sökbar-funktionen hämtats från: https://blog.logrocket.com/create-search-bar-react-from-scratch/

import { useEffect, useState } from "react";

const PokemonList = ({ teamMembers, setTeamMembers }) => {
	const [query, setQuery] = useState("");
	const [isFetching, setIsFetching] = useState(false);
	const [pokemons, setPokemons] = useState([]);

	const fetchData = async () => {
		setIsFetching(true);
		const url = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;
		const response = await fetch(url)
		const data = await response.json()
		console.log("Data from fetch:", data)
		setPokemons(data.results)
		setIsFetching(false);
		console.log()
	}

	useEffect(() => {
		fetchData();
	}, []);


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

	//lägger till Pokemon i teamet och ger möjlighet att ange ett smeknamn
	const addToTeam = (pokemon) => {
		const pokeNickname = window.prompt("Please enter a nickname for your pokémon: ")
		let newTeamMember = {
			Pokemon: pokemon,
			Nickname: pokeNickname,
		};
		console.log(newTeamMember);

		setTeamMembers(existingTeam => [...existingTeam, newTeamMember]
		);

		return (
			<>
				<div className="list-container">
					<h1 className="list-header">List of available Pokémons</h1>
					<input
						placeholder="Enter name of the Pokémon" type="text"
						onChange={inputHandler} />
						{isFetching === false ? (							
					<ul>
						{filteredList.map((pokemon) => (
							<li key={pokemon.id}>
								<img src={pokemon.img} alt={pokemon.name} />
								<p>{pokemon.name}</p>
								<p>{"#" + pokemon.id}</p>
								{pokemon.abilities.map((ability) => (
									<ul key={ability.ability.name}>
										<li>{"Abilities: " + ability.ability.name}</li>
									</ul>))}
								<button 
								className="add-to-team-button" 
								onClick={() => addToTeam(pokemon)}>Add to team</button>
							</li>))}
					</ul>) : (<p>Loading...</p>)}
				</div>
			</>
		)
	}
}
	export default PokemonList
