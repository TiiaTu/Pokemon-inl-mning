import { useState } from 'react'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Start from './components/Start'
import PokemonList from './components/PokemonList'
import Team from './components/Team'
import startpage from './css/startpage.css'

// const testData = [
//   {
//     id:1,
//     name: 'Bulbasaur',
//     img: 'https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/375px-001Bulbasaur.png'
//   },
//   {
//     id:3,
//     name: 'Ivysaur',
//     img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
//   },
//   {
//     id: 4,
//     name: 'Venusaur',
//     img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
//   },
//   {
//     id:6,
//     name: 'Charmander',
//     img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
//   }
// ]

function App() {
  const [teamMembers, setTeamMembers] = useState([])

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
            <Route path="/pokemons" element={<PokemonList  teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>}></Route>
            <Route path="/my-team" element={<Team teamMembers={teamMembers} setTeamMembers={setTeamMembers} />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
