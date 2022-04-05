import React from "react";
import Card from "./UI/Card";
import "./PreviewSelectedTracks.css";

const PreviewSelectedTracks = ({
	albumCover,
	songTitle,
	artistName,
	albumName,
}) => {
	return (
		<Card className='card-selected-tracks'>
			<div className='album-cover'>
				<img src={albumCover} alt={albumName} />
			</div>
			<div className='prev-song-title'>
				<p>{songTitle}</p>
			</div>
			<div className='artist'>
				<p>{artistName.map((artist) => artist.name).join(", ")}</p>
			</div>
		</Card>
	);
};

export default PreviewSelectedTracks;
