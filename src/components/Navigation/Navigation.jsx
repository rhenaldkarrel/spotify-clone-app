// Redux
import { useTypedSelector } from "hooks/typedReduxHooks";

import "./Navigation.css";

const Navigation = ({ logo, modalShow, logout, isDisplayed }) => {
	// User Informations
	const userName = useTypedSelector(
		(state) => state.auth.userInfo?.display_name
	);
	const userImage = useTypedSelector(
		(state) => state.auth.userInfo?.images[0].url
	);

	return (
		<nav>
			<div className='nav-container'>
				<div className='nav-brand'>
					<img src={logo} alt='Spotify Logo' />
				</div>
				<div className='nav-list'>
					<div className='user-info'>
						<img src={userImage} alt='My Avatar' />
						<p>Hello, {userName}!</p>
					</div>
					<button
						className='btn-primary btn-create'
						style={isDisplayed ? { display: "block" } : { display: "none" }}
						onClick={modalShow}>
						Create Playlist
					</button>
					<button className='btn-primary btn-logout' onClick={logout}>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
