// Authorization
import { authSpotify } from "../../auth/auth";

// Components
import logo from "../../spotify-logo.png";

// Styles
import "./index.css";

const LoginPage = () => {
	// return <Login onClick={authSpotify} logo={logo} />;
	return (
		<div className='container-welcome'>
			<div className='welcome'>
				<img src={logo} alt='Spotify Logo' />
				<h1>&#x1F44B; Welcome to Rhenald's Spotify Clone App!</h1>
				<button onClick={authSpotify} className='btn-primary'>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
