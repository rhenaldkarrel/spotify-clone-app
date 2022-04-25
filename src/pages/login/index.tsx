import { useEffect } from "react";
import { useHistory } from "react-router";

// Authorization
import { authSpotify, getUserInfo } from "auth/auth";
import { getToken } from "functions/functions";

// Redux
import { login, storeUserInfo } from "store/authSlice";
import { useTypedDispatch } from "hooks/typedReduxHooks";

// Components
import logo from "spotify-logo.png";

// Styles
import styles from "./index.module.css";

const LoginPage = () => {
	const dispatch = useTypedDispatch();
	const history = useHistory();

	useEffect(() => {
		if (window.location.hash) {
			const token = getToken() as string;
			dispatch(login(token));
			getUserInfo(token).then((data) => dispatch(storeUserInfo(data)));
			history.push("/create-playlist");
		}
	}, [dispatch, history]);

	return (
		<div className={styles.containerWelcome}>
			<div className={styles.welcome}>
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
