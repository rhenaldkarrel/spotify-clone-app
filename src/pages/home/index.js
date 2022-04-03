import React, { useState, useEffect } from "react";

// Configurations
import { getTracks, getToken } from "../../auth/api";

// Helper functions
import { convertDuration } from "../../functions/functions";

// Components
import logo from "../../spotify-logo.png";
import TrackCard from "../../components/TrackCard";
import FormCreatePlaylist from "../../components/FormCreatePlaylist";
import SearchTracks from "../../components/SearchTracks";
import Navigation from "../../components/Navigation";
import Login from "../../components/Login";

// Styling
import "./index.css";

const Home = () => {
	// Spotify API Configuration
	const config = {
		client_id: `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`,
		redirect_uri: `${process.env.REACT_APP_BASE_URL}`,
		authorize_url: `https://accounts.spotify.com/authorize`,
		scope: "playlist-modify-private",
	};

	let redirectUrl = `${config.authorize_url}?client_id=${config.client_id}&response_type=token&redirect_uri=${config.redirect_uri}&scope=${config.scope}`;

	// Trakcs
	const [tracks, setTracks] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [selectedTracks, setSelectedTracks] = useState([]);

	// Config
	const [token, setToken] = useState("");
	const [show, setShow] = useState(false);

	useEffect(() => {
		// check the token everytime the web loaded
		if (
			window.localStorage.getItem("token") ||
			!window.localStorage.getItem("token")
		) {
			setToken(getToken());
		}
	}, []);

	// Handle Logout
	const handleLogout = () => {
		setToken("");
		window.localStorage.removeItem("token");
	};

	// Get data from API
	const handleSearch = (e) => {
		e.preventDefault();
		getTracks(keyword, token).then((data) => setTracks(data));
	};

	// Handle select track
	const handleSelect = (track) => {
		if (selectedTracks.includes(track)) {
			setSelectedTracks(selectedTracks.filter((item) => item !== track));
		} else {
			setSelectedTracks([...selectedTracks, track]);
		}
	};

	// Map the data
	const track = Object.values(tracks).map((track) => (
		<TrackCard
			key={track.id}
			songTitle={track.name}
			artistName={track.artists[0].name}
			albumTitle={track.album.name}
			albumCover={track.album.images[0].url}
			duration={convertDuration(track.duration_ms)}
			onClick={handleSelect}
			isSelected={selectedTracks.includes(track)}
		/>
	));

	// const combinedWithSelectedTracks = Object.values(tracks).map((track) => {
	// 	const alreadySelected = selectedTracks.find((t) => t.id === track.id);
	// 	if (alreadySelected) {
	// 		setSelectedTracks(selectedTracks.filter((item) => item.id !== track.id));
	// 	} else {
	// 		setSelectedTracks([...selectedTracks, track]);
	// 	}
	// });

	// Get keyword
	const handleChange = (e) => setKeyword(e.target.value);

	return (
		<>
			{!token ? (
				<Login redirectUrl={redirectUrl} logo={logo} />
			) : (
				<>
					<Navigation
						logo={logo}
						modalShow={() => setShow(true)}
						logout={handleLogout}
					/>
					<FormCreatePlaylist show={show} onClose={() => setShow(false)} />
					<div id='tracks'>
						<div className='introduction'>
							<h1 className='title'>Find and Create Playlist</h1>
							<p>Find a track, select it, and create your personal playlist</p>
						</div>
						<SearchTracks onChange={handleChange} onSubmit={handleSearch} />
						<div id='results'>{track}</div>
					</div>
				</>
			)}
		</>
	);
};

export default Home;
