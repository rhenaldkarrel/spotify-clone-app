import React, { useState, useEffect, useContext } from "react";

// Configurations
import { getTracks, createPlaylist, getUserInfo } from "../../auth/api";
import TokenContext from "../../context/TokenContext";

// Components
import logo from "../../spotify-logo.png";
import FormCreatePlaylist from "../../components/FormCreatePlaylist";
import SearchTracks from "../../components/SearchTracks";
import Navigation from "../../components/Navigation";
import Tracks from "../../components/Tracks";
import PreviewSelectedTracks from "../../components/PreviewSelectedTracks";

// Styling
import "./index.css";

const Home = () => {
	// Tracks
	const [tracks, setTracks] = useState([]);
	const [keyword, setKeyword] = useState("");

	// Tracks to add to playlist
	const [selectedTracks, setSelectedTracks] = useState([]);

	// Config
	const { token, setToken } = useContext(TokenContext);
	const [userInfo, setUserInfo] = useState([]);
	const [show, setShow] = useState(false);

	// Get user info when the token is available
	useEffect(() => {
		if (token) {
			getUserInfo(token).then((res) => {
				setUserInfo(res);
			});
		}
	}, []);

	// Handle Logout
	const handleLogout = () => {
		setToken("");
		localStorage.removeItem("token");
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

		// Retrieve the user's input
		const playlistData = {
			name: e.target.title.value,
			description: e.target.desc.value,
		};

		// Create playlist and add the selected tracks
		const tracksToAdd = selectedTracks.map((track) => track.uri);
		createPlaylist(userInfo.id, playlistData, tracksToAdd, token);

		// Reset State
		setSelectedTracks([]);
		setShow(false);
	};

	const handleChange = (e) => setKeyword(e.target.value);

	return (
		<>
			<Navigation
				logo={logo}
				modalShow={() => setShow(true)}
				isDisplayed={selectedTracks.length > 0}
				logout={handleLogout}
				userInfo={userInfo}
			/>
			<FormCreatePlaylist
				onSubmit={handleCreatePlaylist}
				show={show}
				onClose={() => setShow(false)}
			/>
			<div id='tracks'>
				{selectedTracks.length > 0 ? (
					<div className='section-introduction'>
						<h1 className='title'>Create Playlists</h1>
						<p className='desc'>
							Create your personal playlist from the selected tracks.
						</p>
						<div className='preview-selected-tracks'>
							<PreviewSelectedTracks selectedTracks={selectedTracks} />
						</div>
					</div>
				) : null}
				<div className='section-introduction'>
					<h1 className='title'>Find and Create Playlist</h1>
					<p className='desc'>
						Find a track, select it, and create your personal playlist
					</p>
				</div>
				<SearchTracks onChange={handleChange} onSubmit={handleSearch} />
				<Tracks
					tracks={tracks}
					onSelectTrack={handleSelect}
					selectedTracks={selectedTracks}
				/>
			</div>
		</>
	);
};

export default Home;
