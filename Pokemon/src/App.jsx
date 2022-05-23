import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Start from './components/Start'
import PokemonList from './components/PokemonList'
import Team from './components/Team'
import startpage from './css/startpage.css'

function App() {
  const [teamMembers, setTeamMembers] = useState([])


  const addTeamMember = (pokemon) => {
    let newPokemon = { team_id: '' }
    newPokemon = { ...pokemon, team_id: 'team' + teamMembers.length }
    setTeamMembers(oldTeam => [...oldTeam, newPokemon])
    alert(`You have added ${pokemon.name} to your team!`)
    return teamMembers
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navibar">
            <NavLink to="/">Start</NavLink>
            <NavLink to="/pokemons">Pokemons</NavLink>
            <NavLink to="/my-team">My Team</NavLink>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/pokemons" element={
              <PokemonList
                teamMembers={teamMembers}
                setTeamMembers={setTeamMembers}
                addTeamMember={addTeamMember} />}>
            </Route>
            <Route path="/my-team" element={
              <Team
                teamMembers={teamMembers}
                setTeamMembers={setTeamMembers} />}>
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
