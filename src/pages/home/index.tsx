import React, { useState } from "react";
import { useHistory } from "react-router";

// Configurations
import { getTracks, createPlaylist } from "auth/api";

// Redux
import { logout } from "store/authSlice";
import {
	setTracks,
	selectTrack,
	deselectTrack,
	clearSelectedTracks,
} from "store/tracksSlice";
import { useTypedSelector, useTypedDispatch } from "hooks/typedReduxHooks";

// Components
import logo from "spotify-logo.png";
import FormCreatePlaylist from "components/FormCreatePlaylist";
import SearchTracks from "components/SearchTracks";
import Navigation from "components/Navigation";
import Tracks from "components/Tracks";
import PreviewSelectedTracks from "components/PreviewSelectedTracks";
import AlertSuccess from "components/AlertSuccess";
import ErrorNotFound from "components/404notfound";

// Styling
import styles from "./index.module.css";

// Types
import { Track } from "types/spotify";

const Home = () => {
	// Redux
	const dispatch = useTypedDispatch();
	const history = useHistory();

	// Tracks
	const tracks = useTypedSelector((state) => state.tracks.tracks);
	const [keyword, setKeyword] = useState<string>("");

	// Tracks to add to playlist
	const selectedTracks = useTypedSelector(
		(state) => state.tracks.selectedTracks
	);

	// Config
	const token = useTypedSelector((state) => state.auth.accessToken);
	const userInfo = useTypedSelector((state) => state.auth.userInfo);
	const [show, setShow] = useState<boolean>(false);
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [showError, setShowError] = useState<boolean>(false);

	// Handle Logout
	const handleLogout = () => {
		dispatch(logout());
		history.push("/");
	};

	// Get data from API
	const handleSearch = (e: React.FormEvent): void => {
		e.preventDefault();
		getTracks(keyword, token).then((data) => dispatch(setTracks(data)));
	};

	// Handle select track
	const handleSelect = (track: Track): void => {
		const isSelected = selectedTracks.find(
			(selectedTrack) => selectedTrack === track
		);

		if (isSelected) {
			dispatch(deselectTrack(track));
		} else {
			dispatch(selectTrack(track));
		}
	};

	// Handle create playlist
	const handleCreatePlaylist = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		const title = (document.getElementById("title") as HTMLInputElement).value;
		const desc = (document.getElementById("desc") as HTMLTextAreaElement).value;

		// Retrieve the user's input
		const playlistData = {
			name: title,
			description: desc,
		};

		// Create playlist and add the selected tracks
		const tracksToAdd = selectedTracks.map((track: Track) => track.uri);
		try {
			createPlaylist(userInfo.id, playlistData, tracksToAdd, token).then(() => {
				dispatch(clearSelectedTracks());
			});
		} catch (error) {
			setShowError(true);
		}

		if (!showError) {
			setShow(false);
			setShowAlert(true);
		} else {
			alert("Something went wrong, please try again");
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		setKeyword(e.target.value);

	return (
		<>
			<Navigation
				logo={logo}
				modalShow={() => setShow(true)}
				isDisplayed={selectedTracks.length > 0}
				logout={handleLogout}
				handleReset={() => dispatch(clearSelectedTracks())}
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
			<div className={styles.tracks}>
				<div className={styles.sectionIntroduction}>
					<h1 className='title'>Find and Create Playlist</h1>
					<p className={styles.desc}>
						Find a track, select it, and create your personal playlist
					</p>
				</div>
				<SearchTracks onChange={handleChange} onSubmit={handleSearch} />
				{tracks.length > 0 ? (
					<Tracks
						tracks={tracks}
						onSelectTrack={handleSelect}
						selectedTracks={selectedTracks}
					/>
				) : (
					<ErrorNotFound />
				)}

				{selectedTracks.length > 0 ? (
					<div
						className={styles.sectionIntroduction}
						style={{ marginTop: "4rem" }}>
						<h1 className='title'>Create Playlists</h1>
						<p className={styles.desc}>
							Create your personal playlist from the selected tracks.
						</p>
						<div className={styles.previewSelectedTracks}>
							<PreviewSelectedTracks selectedTracks={selectedTracks} />
						</div>
					</div>
				) : null}
			</div>
		</>
	);
};

export default Home;
