import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Start from './components/Start'
import PokemonList from './components/PokemonList'
import Team from './components/Team'

function App() {
  const [pokemons, setPokemons] = useState([]); //håller koll på pokemons
  const [teamMembers, setTeamMembers] = useState([]) //uppdaterar variabeln teamMembers när state ändras


  const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`

  //hämtar pokemons från API, kodinspiration för fetchData-funktionen från Josefin https://github.com/NurseJosie/poke-manager-react/blob/master/src/components/Pokedex.jsx
  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const jsonData = await response.json()
      console.log("Data from fetch:", jsonData)

      let pokemonTemp = [];
      for (let i = 0; i < jsonData.results.length; i++) {
        await fetch(jsonData.results[i].url)
          .then(async (response) => {
            const pokeJson = await response.json();

            const newPokemon = {
              id: pokeJson.id,
              name: pokeJson.name,
              img: pokeJson.sprites.front_default,
            };
            pokemonTemp.push(newPokemon);
          });
      }
      setPokemons(pokemonTemp);
      console.log(pokemons)
    }
    catch {
      console.log("error")
    }
  }

  useEffect(() => {
    fetchData();
  }, []); //när [] anges som en parameter så körs funktionen bara en gång


  //genererar ett tresiffrigt id-nummer för varje pokemon när addTeamMember anropas
  const idGenerator = () => {
    let id = Math.floor(Math.random() * 1000) + 1;
    return id;
  }

  const addTeamMember = (pokemon) => {
    let newMember = { new_id: ""}
    newMember = { ...pokemon, new_id : pokemon.name.substring(0,3) + idGenerator(), nickname: null}
    setTeamMembers(existingTeam => [...existingTeam, newMember])
    console.log(teamMembers)
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
                addTeamMember={addTeamMember}
                pokemons={pokemons}
                setPokemons={setPokemons}
              />}>
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
