import React, { useState } from "react";
import TrackCard from "./TrackCard";
import "./Tracks.css";

const Tracks = () => {
	const [tracks, setTracks] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [token, setToken] = useState("");

	// Spotify API Configuration
	const config = {
		client_id: `${process.env.REACT_APP_CLIENT_ID}`,
		client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
		redirect_uri: `http://localhost:3000/`,
		authorize_url: `https://accounts.spotify.com/authorize`,
		scope: "playlist-modify-private",
	};

	// check the token everytime the web loaded
	window.onload = () => {
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
	};

	const handleChange = (e) => setKeyword(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(
			`https://api.spotify.com/v1/search?q=${keyword}&type=track&limit=12`,
			{ method: "GET", headers: { Authorization: `Bearer ${token}` } }
		);
		const res = await response.json();
		const data = await res.tracks.items;
		setTracks(data);
	};

	// Destroy token and empty the result
	const handleLogout = () => {
		setToken("");
		document.getElementById("results").innerHTML = "";
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
		/>
	));

	return (
		<div id='tracks'>
			<h1 className='title'>Search Tracks</h1>
			<div className='search-container'>
				{!token ? (
					<a
						href={`${config.authorize_url}?client_id=${config.client_id}&response_type=token&redirect_uri=${config.redirect_uri}&scope=${config.scope}`}
						className='btn-auth'>
						Login
					</a>
				) : (
					<>
						<button className='btn-auth' onClick={handleLogout}>
							Logout
						</button>
						<form action='#' onSubmit={handleSubmit}>
							<input
								className='input-search'
								type='text'
								placeholder='Type a playlist name...'
								onChange={handleChange}
							/>
							<button>Search</button>
						</form>
					</>
				)}
			</div>
			<div id='results'>{track}</div>
		</div>
	);
};

export default Tracks;
