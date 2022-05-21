import './../css/PokemonList.css'
import { useEffect, useState } from "react";

const PokemonList = ({ teamMembers, setTeamMembers }) => {
	const [query, setQuery] = useState("");
	const [pokemons, setPokemons] = useState([]);

	//alternativa sätt att lägga till medlemmar i laget
	const addTeamMember = (pokemon) => {
		setTeamMembers([...teamMembers, { pokemon }])
	}

	// const addPokemon = (poke) => {
	// 	let newPoke = {party_id: ""}
	// 	newPoke = {...poke, party_id : "partyTeam" + pokeList.length}
	// 	setPokeList( pokemon => [...pokemon, newPoke])
	// 	return pokeList
	// }


	const fetchData = async () => {
		try {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
			const jsonData = await response.json()
			console.log("Data from fetch:", jsonData)
			setPokemons(jsonData.results)
		}

		catch {
			console.log("error")
		}
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
	// const addToTeam = (pokemon) => {
	// 	const pokeNickname = window.prompt("Please enter a nickname for your pokémon: ")
	// 	let newTeamMember = {
	// 		Pokemon: pokemon,
	// 		Nickname: pokeNickname,
	// 	};
	// 	console.log(newTeamMember);

	// 	setTeamMembers(existingTeam => [...existingTeam, newTeamMember]
	// 	);
	// }

	return (
		<div className="list-container">
			<h1>List of available Pokémons</h1>
			<input
				className="search-bar"
				placeholder="Enter name of the Pokémon"
				type="text"
				onChange={inputHandler}
			/>
			<ul className="available-pokemons">
				{filteredList.map((pokemon) => (
					<li key={pokemon.id}>
						<img src={pokemon.img} alt={pokemon.name} />
						<p>{pokemon.name}</p>
						<p>{"#" + pokemon.id}</p>
						{/* {pokemon.abilities.map((ability) => (
								<ul key={ability.ability.name}>
									<li>{"Abilities: " + ability.ability.name}</li>
								</ul>))} */}
						<button
							className="add-to-team-btn"
							onClick={() => addTeamMember(pokemon.name)}>Add to team</button>
					</li>))}
			</ul>
		</div>
	)
}

export default PokemonList
