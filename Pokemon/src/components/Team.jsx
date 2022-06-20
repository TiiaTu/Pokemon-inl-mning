
import { useState , useEffect} from 'react'
import '../css/team.css'

const Team = ({ teamMembers, setTeamMembers }) => {

	const [pokemonName, setPokemonName] = useState('')

	const infoText = "Give your team members nicknames by clicking the 'Give nickname' button and type the nickname in the input field. If you want to remove a Pokémon from the Team, click the Remove button."

	const removeTeamMember = (id) => {
		console.log("take away member")
		
		let updatedMemberList = teamMembers.filter(member => member.new_id !== id)
		setTeamMembers(updatedMemberList)
		console.log(teamMembers)
	}

	const editName = (pokemon) => {
		let givenNickname = window.prompt("Please enter a nickname for your pokémon: ")
		console.log(givenNickname)
		checkDoubles(pokemon, givenNickname)
		pokemon.nickname = givenNickname
		console.log(pokemon)
		return pokemon.nickname
	}

	const checkDoubles = (pokemon, name) => {
		let check = teamMembers.find(member => member.nickname === pokemon.nickname)
		console.log(check)
		if(check.nickname === name) {{
			window.alert("You already have a Pokémon with that nickname. Please consider changing the name.")
		}}
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
				<p>{infoText}</p>
			</div>
			<ul className="team-member-card">
				{teamMembers.length < 3 ?
					(<div><p className="team-too-small-message">Oh no! You don't have enough Team members! You need at least 3 Pokémons to form a Team!</p>
					<p>Right now your team consists of {teamMembers.length} Pokémons: 
						{teamMembers.map((pokemon) => 
						(<li key={pokemon.new_id}>
							<p>{pokemon.name} ({pokemon.nickname == null ? "no nickname" : pokemon.nickname})</p>
							</li> ))}
							</p></div>)
					: (teamMembers.map((pokemon, i) => (
						<li key={pokemon.new_id + pokemon.name + i}>
							<img src={pokemon.img} />
							<p>{"#" + pokemon.new_id}</p>
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
			}>Swipe out the whole team</button>}
		</div>
	)
}
export default Team