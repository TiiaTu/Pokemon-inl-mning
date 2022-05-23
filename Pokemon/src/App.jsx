import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Start from './components/Start'
import PokemonList from './components/PokemonList'
import Team from './components/Team'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [teamMembers, setTeamMembers] = useState([])


  const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`

  //hämtar pokemons från API, kodinspiration från Josefin https://github.com/NurseJosie/poke-manager-react/blob/master/src/components/Pokedex.jsx
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
    //   setPokemons(jsonData.results)
    // }

    catch {
      console.log("error")
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const addTeamMember = (pokemon) => {
    let newPokemon = { team_id: "" }
    newPokemon = { ...pokemon, team_id : "team" + teamMembers.length, nickname: "" }
    setTeamMembers(existingTeam => [...existingTeam, newPokemon])
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
