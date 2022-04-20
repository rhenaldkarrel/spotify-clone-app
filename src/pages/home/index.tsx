import React, { useState } from "react";
import { useHistory } from "react-router";

// Configurations
import { getTracks, createPlaylist } from "auth/api";

// Redux
import { logout } from "store/authSlice";
import { useTypedSelector, useTypedDispatch } from "hooks/typedReduxHooks";

// Components
import logo from "spotify-logo.png";
import FormCreatePlaylist from "components/FormCreatePlaylist/FormCreatePlaylist";
import SearchTracks from "components/SearchTracks/SearchTracks";
import Navigation from "components/Navigation/Navigation";
import Tracks from "components/Tracks/Tracks";
import PreviewSelectedTracks from "components/PreviewSelectedTracks/PreviewSelectedTracks";
import AlertSuccess from "components/AlertSuccess/AlertSuccess";

// Styling
import "./index.css";

// Types
import { Track } from "types/spotify";

const Home = () => {
	// Redux
	const dispatch = useTypedDispatch();
	const history = useHistory();

	// Tracks
	const [tracks, setTracks] = useState([]);
	const [keyword, setKeyword] = useState("");

	// Tracks to add to playlist
	const [selectedTracks, setSelectedTracks]: any[] = useState([]);

	// Config
	const token = useTypedSelector((state) => state.auth.accessToken);
	const userInfo = useTypedSelector((state) => state.auth.userInfo);
	const [show, setShow] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	// Handle Logout
	const handleLogout = () => {
		dispatch(logout());
		localStorage.removeItem("token");
		history.push("/");
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
		const tracksToAdd = selectedTracks.map((track: Track) => track.uri);
		createPlaylist(userInfo?.id, playlistData, tracksToAdd, token);

		// Reset State
		setSelectedTracks([]);
		setShow(false);
		setShowAlert(true);
	};

	const handleChange = (e) => setKeyword(e.target.value);

	return (
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
			<AlertSuccess
				header={"Success created playlist!"}
				message={"Check your spotify account to check it."}
				show={showAlert}
				onClose={() => setShowAlert(false)}
			/>
			<div id='tracks'>
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
				{selectedTracks.length > 0 ? (
					<div className='section-introduction' style={{ marginTop: "4rem" }}>
						<h1 className='title'>Create Playlists</h1>
						<p className='desc'>
							Create your personal playlist from the selected tracks.
						</p>
						<div className='preview-selected-tracks'>
							<PreviewSelectedTracks selectedTracks={selectedTracks} />
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};

export default Home;
