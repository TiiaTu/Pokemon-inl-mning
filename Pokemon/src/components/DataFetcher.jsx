import { useState } from 'react'

const DataFetcher = () => {
	const [pokemonList, setPokemonList] = useState()

	const fetchData = async () => {
		const url = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=40"
		const response = await fetch(url)
		const data = await response.json()
		setPokemonList(data.results)
	}
}