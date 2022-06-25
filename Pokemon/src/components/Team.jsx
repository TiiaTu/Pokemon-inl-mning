
import { useState} from 'react'
import '../css/team.css'

const Team = ({ teamMembers, setTeamMembers }) => {

	const [pokemonName, setPokemonName] = useState('')

	const removeTeamMember = (id) => {	
		let updatedMemberList = teamMembers.filter(member => member.new_id !== id)
		setTeamMembers(updatedMemberList)
	}

	const editName = (pokemon) => {
		let givenNickname = window.prompt("Please enter a nickname for your pokémon: ")
		checkDoubles(pokemon, givenNickname)
		pokemon.nickname = givenNickname
		return pokemon.nickname
	}

	const checkDoubles = (pokemon, name) => {
		let check = teamMembers.find(member => member.nickname === pokemon.nickname)
		if (check.nickname === name) {
			{
				window.alert("You already have a Pokémon with that nickname. Please consider changing the name.")
			}
		}
	}


	const handleRemove = (pokemon) => {
		removeTeamMember(pokemon)
	}

	//håller koll på när namnet ändras
	const handleNameChange = (pokemon) => {
		setPokemonName(pokemon)

	}
	return (
		<div className="team-container">
			<div className="team-page-info">
				<h2>Your Team</h2>
			</div>
			<ul className="team-member-card">
				{teamMembers.length < 3 ?
					(<div><span className="team-too-small-message">Oh no! You don't have enough Team members! You need at least 3 Pokémons to form a Team! <br></br> <br></br>
						Right now your team consists of {teamMembers.length} Pokémons:
						{teamMembers.map((pokemon) =>
						(<li key={pokemon.new_id}>
							<p>{pokemon.name} ({pokemon.nickname == null ? "no nickname" : pokemon.nickname})
							</p>
							<img src={pokemon.team_img} />

						</li>))}
					</span></div>)
					: (teamMembers.map((pokemon, i) => (
						<li key={pokemon.new_id + pokemon.name + i}>
							<img src={pokemon.team_img} />
							<p>{pokemon.name}</p>
							<p>{pokemon.nickname}</p>
							<button
								className="give-nickname-btn"
								onClick={() => {
									handleNameChange(editName(pokemon))

								}}>Give nickname</button>
							<button className="remove-button" onClick={() => handleRemove(pokemon.new_id)}>Remove</button>
						</li>
					)))}

			</ul>
			{<button
				onClick={() => setTeamMembers([])
				}>Wipe out the whole team</button>}
		</div>
	)
}
export default Team