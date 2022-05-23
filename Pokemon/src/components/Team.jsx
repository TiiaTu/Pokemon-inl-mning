
import { useState } from 'react'
import '../css/team.css'

const Team = ({ teamMembers, setTeamMembers }) => {

	const [pokemonName, setPokemonName] = useState('')

	const infoText = "Give your team members nicknames by clicking the Pokemon you want to rename and typing in the name in the input field. If you want to remove a Pokémon from the Team, click the Remove button."

	//en funktion som tar bort pokemons från listan
	// const kickOutOfTeam = (id) => {
	// 	const currentTeam = teamMembers.filter(pokemon => pokemon.id !== id);
	// 	setTeamMembers(currentTeam);
	// }

	// const removeTeamMember = (index) => {
	// 	console.log(index, teamMembers);
	// 	const team = [
	// 	  ...teamMembers.slice(0, index),
	// 	  ...teamMembers.slice(index +1),
	// 	];
	// 	console.log(team);
	// 	setTeamMembers(team);
	//   };

	// const removeTeamMember = (id) => {
	// 	console.log("ta bort member")
	// 	const takeAway = teamMembers.find(member => member.team_id !== id)
	// 	takeAway.team_id = null;

		
	// 	arrayRemove(teamMembers, {team_id: null});
	// 	console.log(takeAway)
	// 	setTeamMembers(updatedList)
	// 	console.log(updatedList)
	// }

	const editName = () => {
		let nickname = window.prompt("Please enter a nickname for your pokémon: ")
		setPokemonName(nickname)
	}

	const removeTeamMember = (id) => {
		let updateList = teamMembers.filter(p => p.team_id !== id)
		setTeamMembers(updateList)
		return teamMembers
	}

	const handleRemove = (pokemon) => {
		removeTeamMember(pokemon)
	}
    
    
	return (
		<div className="team-container">
			<div className="team-page-info">
				<h2>Your Team</h2>
				<p>{infoText}</p>
			</div>
			<ul className="team-member-card">
				{teamMembers.length < 3 ?
					(<p className="team-too-small-message">You need at least 3 Pokémons to form a Team!</p>)
					: (teamMembers.map((pokemon, i) => (
						<li key={pokemon.id + pokemon.name + i}>
							<img src={pokemon.img} />
							<p>{pokemon.name}</p>
							<p>{pokemon.nickname}</p>
							<p>{"#" + pokemon.id}</p>
							<button
							className="give-nickname-btn"
							onClick={() => {
								editName(pokemon)
							}}>Give nickname</button>
							<button className="remove-button" onClick={() => handleRemove(pokemon.id)}>Remove</button>
						</li>
					)))}

			</ul>
		</div>
	)
}
export default Team