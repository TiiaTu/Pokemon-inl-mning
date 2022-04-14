//inspiration till sökbar-funktionen hämtats från: https://blog.logrocket.com/create-search-bar-react-from-scratch/

import { useState } from "react";
import Team from './Team'

const PokemonList = ({ pokemons, teamMembers, setTeamMembers}) => {
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

	//lägger till Pokemon i teamet
	const addToTeam = (pokemon, teamMembers) => {
		let newTeam = [...teamMembers, pokemon];
		return setTeamMembers(newTeam);
	}

	const removeTeamMember = () => {
		 {
		const newList = list.filter((item) => item.id !== id);
	
		setList(newList);
	  }

	// //kollar ifall Pokemon redan finns i teamet
	// const isAlreadyInTeam = (Team, newTeamMember) => {
	// 	if (Team.includes(newTeamMember)) {
	// 		return (
	// 			<div>{'This pokemon is already in your team!'}</div>
	// 		)
	// 	}

	

	//tar bort Pokemon från listan när man clickar på add to team, vilket även löser problemet med dubbletter
	const takeFromList = () => {
		pokemons.filter(pokemon => {
			if (pokemons.includes(pokemon.name)) {
				return
			}
			else {
				return true;
			}

			return updatedList;

		})
	}

	return (
		<div className="list-container">
			<h1 className="list-header">List of available Pokemons</h1>
			<input placeholder="Enter name of the Pokemon" type="text" onChange={inputHandler} />
			<ul>
				{filteredList.map((pokemon) => (
					<li key={pokemon.id}>
						<img src={pokemon.img} alt={pokemon.name} />
						<p>{pokemon.name}</p>
						<button className="add-to-team-button" onClick={
							addToTeam(pokemon, Team)
						}>Add to team</button>
					</li>))}
			</ul>
		</div>
	)
}

export default PokemonList




///OBS!! Denna kod fungerar! Den söker pokemon från listan


// const PokemonList = ({ pokemons }) => {
// 	const [query, setQuery] = useState("");
// 	const [updatedList, setUpdatedList] = useState()

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

// 	//lägger till Pokemon i teamet
// 	const addToTeam = (pokemon, Team) => {
// 		let newTeam = [...Team, pokemon];
// 		return newTeam;
// 	}

// 	//kollar ifall Pokemon redan finns i teamet
// 	const isAlreadyInTeam = (Team, newTeamMember) => {
// 		if (Team.includes(newTeamMember)) {
// 			return (
// 				<div>{'This pokemon is already in your team!'}</div>
// 			)
// 		}

// 	}

// 	//tar bort från listan, vilket även löser problemet med dubbletter
// 	const takeFromList = () => {
// 		pokemons.filter(pokemon => {
// 			if (pokemons.includes(pokemon.name)) {
// 				return
// 			}
// 			else {
// 				return true;
// 			}

// 			return updatedList;

// 		})
// 	}


// 	return (
// 		<div className="list-container">
// 			<h1 className="list-header">List of available Pokemons</h1>
// 			<input placeholder="Enter name of the Pokemon" type="text" onChange={inputHandler} />
// 			<ul>
// 				{filteredList.map((pokemon) => (
// 					<li key={pokemon.id}>
// 						<img src={pokemon.img} alt={pokemon.name} />
// 						<p>{pokemon.name}</p>
// 						<button className="add-to-team-button">Add to team</button>
// 					</li>))}
// 			</ul>
// 		</div>
// 	)
// }

// export default PokemonList
