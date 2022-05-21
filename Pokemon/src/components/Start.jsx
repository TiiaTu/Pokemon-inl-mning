import { useNavigate } from 'react-router-dom'

const Start = () => {

	const logoType = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8bf49eb-f01d-4851-810a-6aa6fc317107/defoec0-d0c0a40d-139d-482a-a043-6da7178296dd.png/v1/fill/w_1600,h_975,strp/pokemon_logo_update_2021_by_obsolete00_defoec0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTc1IiwicGF0aCI6IlwvZlwvZDhiZjQ5ZWItZjAxZC00ODUxLTgxMGEtNmFhNmZjMzE3MTA3XC9kZWZvZWMwLWQwYzBhNDBkLTEzOWQtNDgyYS1hMDQzLTZkYTcxNzgyOTZkZC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.q5xiGiCiW5rIaSkzLpngofi4bsdFnlMMGEGIC14R5Ic"

	return (
		<div className="start-page">
			<>
				<div className="main-start">
					<img className="start-img" src={logoType} alt="could not load the image" />
					<div className="text-box">
						<h1>Welcome to Pokémon Team Builder!</h1>
						<p>Build your own Pokémon Team</p>
						<button onClick={useNavigate}>Get Started</button>
					</div>
				</div>

			</>
		</div>
	)
}
export default Start