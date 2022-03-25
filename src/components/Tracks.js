import React from "react";
import TrackCard from "./TrackCard";
import "./Tracks.css";

import data from "./TracksData";

const tracks = data.map((track) => (
	<TrackCard
		song={track.name}
		artist={track.artists[0].name}
		album={track.album.name}
		img={track.album.images[0].url}
		createdAt={track.album.release_date}
	/>
));

const Tracks = () => {
	console.log(data);
	return (
		<div id='tracks'>
			<div className='section-title'>
				<h2>Tracks</h2>
			</div>
			<div id='cards'>{tracks}</div>
		</div>
	);
};

export default Tracks;
