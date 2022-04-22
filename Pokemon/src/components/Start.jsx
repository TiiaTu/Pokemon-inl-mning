import {useNavigate} from 'react-router-dom'

const Start = () => {
	
	return(
		<div className="start-page">
			<>
			<img className="start-img"src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Symbol.jpg" alt="could not load the image" />
			<h1>Welcome to Pokémon Team Builder!</h1>
			<p>Build your own Pokémon Team</p>
			<button onClick={useNavigate}>Get Started</button>		
			</>
		</div>
	)
}
export default Start