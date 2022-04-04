import React, { useState, useEffect } from "react";

// Configurations
import { getTracks, getToken, createPlaylist } from "../../auth/api";

// Components
import logo from "../../spotify-logo.png";
import FormCreatePlaylist from "../../components/FormCreatePlaylist";
import SearchTracks from "../../components/SearchTracks";
import Navigation from "../../components/Navigation";
import Login from "../../components/Login";
import Tracks from "../../components/Tracks";
import PreviewSelectedTracks from "../../components/PreviewSelectedTracks";

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
	const [playlists, setPlaylists] = useState([]);

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
		const isSelected = selectedTracks.find(
			(selectedTrack) => selectedTrack === track
		);

		if (isSelected) {
			setSelectedTracks(
				selectedTracks.filter((selectedTrack) => selectedTrack !== track)
			);
		} else {
			setSelectedTracks((prev) => [...prev, track]);
		}
	};

	// Handle create playlist
	const handleCreatePlaylist = (e) => {
		e.preventDefault();
		const playlist = {
			name: e.target.title.value,
			description: e.target.desc.value,
			tracks: selectedTracks,
		};

		setPlaylists((prev) => [...prev, playlist]);
		setSelectedTracks([]);
		setShow(false);
	};

	const viewPlaylists = playlists.map((playlist, index) => {
		return (
			<div className='playlist' key={index}>
				<h3>{playlist.name}</h3>
				<p>{playlist.description}</p>
				<ul>
					{playlist.tracks.map((track, index) => {
						return <li key={index}>{track.name}</li>;
					})}
				</ul>
			</div>
		);
	});

	const viewSelectedTracks = Object.values(selectedTracks).map((track) => (
		<PreviewSelectedTracks
			key={track.id}
			songTitle={track.name}
			albumCover={track.album.images[0].url}
			artistName={track.artists}
			albumName={track.album.name}
		/>
	));

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
						isDisplayed={selectedTracks.length > 0}
						logout={handleLogout}
					/>
					<FormCreatePlaylist
						onSubmit={handleCreatePlaylist}
						show={show}
						onClose={() => setShow(false)}
					/>
					<div id='tracks'>
						{selectedTracks.length > 0 ? (
							<>
								<div className='section-introduction'>
									<h1 className='title'>Create Playlists</h1>
									<p>Create your personal playlist from the selected tracks.</p>
									<div className='preview-selected-tracks'>
										{viewSelectedTracks}
									</div>
								</div>
							</>
						) : null}
						<div className='section-introduction'>
							<h1 className='title'>Find and Create Playlist</h1>
							<p>Find a track, select it, and create your personal playlist</p>
						</div>
						<SearchTracks onChange={handleChange} onSubmit={handleSearch} />
						<Tracks
							tracks={tracks}
							onSelectTrack={handleSelect}
							selectedTracks={selectedTracks}
						/>
						{playlists.length > 0 ? (
							<div className='section-introduction'>
								<h1 className='title'>Hey, this is your playlists!</h1>
								<p>All playlists that you have created before.</p>
								<div className=''>{viewPlaylists}</div>
							</div>
						) : null}
					</div>
				</>
			)}
		</>
	);
};

export default Home;
