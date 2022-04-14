import {useState} from './react'

const Team =({pokemons, teamMembers, setTeamMembers}) => {
	
	
	//en funktion som ändrar på namnet av en pokemon, eller ger ett smeknamn till den
	const changeName = (team, newName) => {
		let newNickName = {...pokemons, name: newName}
		return newNickName;
	}

	//en funktion som tar bort pokemons från listan
	const kickOutOfTeam = () => {

	}

	return(
		<div className="team-container">
			
		</div>
	)
}
export default Team

//eventuellt lägga till en function som sorterar listan enligt namn, eller ability, eller nyaste?