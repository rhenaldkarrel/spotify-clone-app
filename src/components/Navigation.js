import React from "react";
import "./Navigation.css";

const Navigation = ({ logo, modalShow, logout, isDisplayed, userInfo }) => {
	return (
		<nav>
			<div className='nav-container'>
				<div className='nav-brand'>
					<img src={logo} alt='Spotify Logo' />
				</div>
				<div className='nav-list'>
					<div className='user-info'>
						{/* <img src={userInfo.images[0].url} alt='Display Picture' /> */}
						<p>Hello, {userInfo.display_name}!</p>
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
