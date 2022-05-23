import { useState } from 'react'
import '../css/team.css'

const Team = ({ teamMembers, setTeamMembers }) => {
	const [pokemonName, setPokemonName] = useState('')

	const infoText ="Give your team members nicknames by clicking the Pokemon you want to rename and typing in the name in the input field. If you want to remove a Pokémon from the Team, click the Remove button."
	//en funktion som tar bort pokemons från listan
	// const kickOutOfTeam = (id) => {
	// 	const currentTeam = teamMembers.filter(pokemon => pokemon.id !== id);
	// 	setTeamMembers(currentTeam);
	// }

	const removeTeamMember = (id) => {
		setTeamMembers(teamMembers.filter(member => member.id !== id))
	}

	const renameTeamMember = (pokemon) => {
	}

	const getId = () => {

	}

	

	return (
		<div className="team-container">
			<div className="team-page-info">
				<h2>Your Team</h2>
				<p>{infoText}</p>
			</div>
			<input
				type="text"
				placeholder={"Enter nickname here"}
				onChange={event => setPokemonName(event.target.value)} />
			<ul className="team-member-card">
				{teamMembers.map((pokemon,i) => (
					<li key={pokemon.id + pokemon.name+ i}>
							<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png" alt="could not load image" />
							<p>{pokemon.name}</p>
							<p>{"#" + pokemon.id}</p>
						
						<button className="remove-button" onClick={() => removeTeamMember(pokemon.id)}>Remove</button>
					</li>
				)
				)}
			</ul>
		</div>

	)
}
export default Team


//med mindre än tre members
// return(
// 	<div className="team-container">
// 		<h2>Your Team</h2>
// 		<ul>
// 		{teamMembers< 3 ? (
// 			<p className="team-too-small-message">You need at least 3 Pokémons to form a Team!</p>
// 		) : teamMembers.map(pokemon => (
// 			<li key={pokemon.id}>
// 				<img src={pokemon.img} alt={pokemon.name} />
// 				<p>{pokemon.name}</p>
// 				<p>{"#" + pokemon.id}</p>
// 				{/* <ul>
// 					{pokemon.abilities.map((ability) => (
// 					<li key={ability.name}>
// 						{"Abilities: " + ability.name}
// 					</li>))}
// 				</ul> */}
// 				<button className="kick-out-of-team-button" onClick={() => removeTeamMember(pokemon.id)}>Kick out of the Team</button>
// 			</li>
// 			)
// 		)}
// 		</ul>
// 	</div>
// )
