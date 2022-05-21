import {useState} from 'react'
import '../css/team.css'

const Team =({teamMembers, setTeamMembers}) => {

	//en funktion som tar bort pokemons från listan
	// const kickOutOfTeam = (id) => {
	// 	const currentTeam = teamMembers.filter(pokemon => pokemon.id !== id);
	// 	setTeamMembers(currentTeam);
	// }

	const removeTeamMember = (pokemon) => {
		setTeamMembers(teamMembers.filter(member => member.pokemon !== pokemon))
	}



	return(
		<div className="team-container">
			<h2>Your Team</h2>
			<ul>
			{teamMembers< 3 ? (
				<p className="team-too-small-message">You need at least 3 Pokémons to form a Team!</p>
			) : teamMembers.map(pokemon => (
				<li key={pokemon.id}>
					<img src={pokemon.img} alt={pokemon.name} />
					<p>{pokemon.name}</p>
					<p>{"#" + pokemon.id}</p>
					{/* <ul>
						{pokemon.abilities.map((ability) => (
						<li key={ability.name}>
							{"Abilities: " + ability.name}
						</li>))}
					</ul> */}
					<button className="kick-out-of-team-button" onClick={() => removeTeamMember(pokemon.id)}>Kick out of the Team</button>
				</li>
				)
			)}
			</ul>
		</div>
	)
}
export default Team
