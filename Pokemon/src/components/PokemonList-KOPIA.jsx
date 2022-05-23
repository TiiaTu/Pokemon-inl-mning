// import './../css/pokemonList.css'
// import './../css/team.css'
// import { useEffect, useState } from "react";

// const PokemonList = ({ addTeamMember, teamMembers, setTeamMembers }) => {
// 	const [query, setQuery] = useState("");
// 	const [pokemons, setPokemons] = useState([]);

// 	//alternativa sätt att lägga till medlemmar i laget
// 	// const addTeamMember = (pokemon) => {
// 	// 	setTeamMembers([...teamMembers,  pokemon ])
// 	// 	alert("You have added " + pokemon.name + " to your team!")
// 	// }

// 	const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`

// 	const fetchData = async () => {
// 		try {
// 			const response = await fetch(url)
// 			const jsonData = await response.json()
// 			console.log("Data from fetch:", jsonData)
// 			let pokemonTemp = [];
// 			for (let i = 0; i < data.results.length; i++) {
// 				await fetch(data.results[i].url).then(async (response) => {
// 					const pokeJson = await response.json();
// 					const newPokemon = {
// 						id: pokeJson.id,
// 						name: pokeJson.name,
// 						img: pokeJson.sprites.front_default,
// 					};
// 					pokemonTemp.push(newPokemon);
// 				});
// 			}
// 			setPokemons(pokemonTemp);
// 			setPokemons(jsonData.results)
// 		}

// 		catch {
// 			console.log("error")
// 		}
// 	}

// 	useEffect(() => {
// 		fetchData();
// 	}, []);



// 	//sätter input till lower case
// 	const inputHandler = (input) => {
// 		let inputAsString = input.target.value.toString();
// 		let lowerCased = inputAsString.toLowerCase();
// 		setQuery(lowerCased)
// 	}

// 	//hämtar alla pokemons som matchar söksträngen 
// 	const filteredList = pokemons.filter(pokemon => {
// 		if (query === "") {
// 			return true;
// 		}
// 		else if (pokemon.name.toLowerCase().includes(query)) {
// 			return true;
// 		}
// 		else {
// 			return false;
// 		}
// 	})


// 	//lägger till Pokemon i teamet och ger möjlighet att ange ett smeknamn
// 	// const addToTeam = (pokemon) => {
// 	// 	const pokeNickname = window.prompt("Please enter a nickname for your pokémon: ")
// 	// 	let newTeamMember = {
// 	// 		Pokemon: pokemon,
// 	// 		Nickname: pokeNickname,
// 	// 	};
// 	// 	console.log(newTeamMember);

// 	// 	setTeamMembers(existingTeam => [...existingTeam, newTeamMember]
// 	// 	);
// 	// }

// 	return (
// 		<div className="team-container">
// 			<h1>List of available Pokémons</h1>
// 			<input
// 				className="search-bar"
// 				placeholder="Enter name of the Pokémon"
// 				type="text"
// 				onChange={inputHandler}
// 			/>
// 			<ul className="team-member-card">
// 				{filteredList.map((pokemon, i) => (
// 					<li key={pokemon.id + i}>
// 						<img src={pokemon.img} alt={`could not load picture of ${pokemon.name}`} />
// 						<p>{pokemon.name}</p>
// 						<p>{"#" + pokemon.id}</p>
// 						<button
// 							className="add-to-team-btn"
// 							onClick={() => addTeamMember(pokemons)}>Add to team
// 						</button>

// 					</li>))}
// 			</ul>
// 		</div>
// 	)
// }

// export default PokemonList