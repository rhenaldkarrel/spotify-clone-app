import React, { useState, useEffect } from "react";
import TrackCard from "./TrackCard";
import logo from "../spotify-logo.png";
import FormCreatePlaylist from "./FormCreatePlaylist";

import "./Tracks.css";
import "./FormCreatePlaylist.css";

const Tracks = () => {
	const [tracks, setTracks] = useState([]);
	const [selectedTracks, setSelectedTracks] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [token, setToken] = useState("");
	const [show, setShow] = useState(false);

	// Spotify API Configuration
	const config = {
		client_id: `${process.env.REACT_APP_CLIENT_ID}`,
		client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
		redirect_uri: `http://localhost:3000/`,
		authorize_url: `https://accounts.spotify.com/authorize`,
		scope: "playlist-modify-private",
	};

	// check the token everytime the web loaded
	useEffect(() => {
		const hash = window.location.hash;
		let token = "";

		if (!token && hash) {
			token = hash
				.substring(1)
				.split("&")
				.find((elem) => elem.startsWith("access_token"))
				.split("=")[1];

			window.location.hash = "";
		}

		setToken(token);
	}, []);

	const handleChange = (e) => setKeyword(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(
			`https://api.spotify.com/v1/search?q=${keyword}&type=track&limit=15`,
			{ method: "GET", headers: { Authorization: `Bearer ${token}` } }
		);
		const res = await response.json();
		const data = await res.tracks.items;
		console.log(data);
		setTracks(data);
	};

	// Destroy token
	const handleLogout = () => {
		setToken("");
	};

	const handleSelect = (track) => {
		if (!selectedTracks.includes(track.id)) {
			setSelectedTracks([...selectedTracks, track]);
		} else {
			setSelectedTracks(
				selectedTracks.filter((removedTrack) => removedTrack.id !== track.id)
			);
		}
	};

	// map the tracks to TrackCard component
	const track = tracks.map((track) => (
		<TrackCard
			key={track.id}
			song={track.name}
			artist={track.artists[0].name}
			album={track.album.name}
			img={track.album.images[0].url}
			createdAt={track.album.release_date}
			// onselect={handleSelect(track)}
			// selected={selectedTracks.includes(track.id)}
		/>
	));

	return (
		<>
			{!token ? (
				<div className='container-welcome'>
					<div className='welcome'>
						<img src={logo} alt='Spotify Logo' />
						<h1>&#x1F44B; Welcome to Rhenald's Spotify Clone App!</h1>
						<a
							href={`${config.authorize_url}?client_id=${config.client_id}&response_type=token&redirect_uri=${config.redirect_uri}&scope=${config.scope}`}
							className='btn-primary'>
							Login
						</a>
					</div>
				</div>
			) : (
				<>
					<nav>
						<div className='nav-container'>
							<div className='navbar-brand'>
								<img src={logo} alt='Spotify Logo' />
							</div>
							<div className='nav-list'>
								<button
									className='btn-primary btn-create'
									onClick={() => setShow(true)}>
									Create Playlist
								</button>
								<button
									className='btn-primary btn-logout'
									onClick={handleLogout}>
									Logout
								</button>
							</div>
						</div>
					</nav>
					<FormCreatePlaylist show={show} onClose={() => setShow(false)} />
					<div id='tracks'>
						<div className='introduction'>
							<h1 className='title'>Find and Create Playlist</h1>
							<p>Find a track, select it, and create your personal playlist</p>
						</div>
						<div className='search-container'>
							<form action='#' onSubmit={handleSubmit}>
								<input
									className='input-search'
									type='text'
									placeholder='Type your track...'
									onChange={handleChange}
								/>
								<button>Search</button>
							</form>
						</div>
						<div id='results'>{track} </div>
					</div>
				</>
			)}
		</>
	);
};

export default Tracks;
