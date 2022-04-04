import React from "react";
import "./Navigation.css";

const Navigation = ({ logo, modalShow, logout, isDisplayed }) => {
	return (
		<nav>
			<div className='nav-container'>
				<div className='navbar-brand'>
					<img src={logo} alt='Spotify Logo' />
				</div>
				<div className='nav-list'>
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
