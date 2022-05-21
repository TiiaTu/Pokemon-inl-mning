import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Start from './components/Start'
import PokemonList from './components/PokemonList'
import Team from './components/Team'
import startpage from './css/startpage.css'

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navibar">
            <NavLink to="/">Start</NavLink>
            <NavLink to="/teamMembers">Pokemons</NavLink>
            <NavLink to="/my-team">My Team</NavLink>
          </nav>
        </header>
        <main className="App-main">
            <Routes>
              <Route path="/" element={<Start />}></Route>
              <Route path="/teamMembers" element={<PokemonList teamMembers={teamMembers} setTeamMembers={setTeamMembers} />}></Route>
              <Route path="/my-team" element={<Team teamMembers={teamMembers} setTeamMembers={setTeamMembers} />}></Route>
            </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
