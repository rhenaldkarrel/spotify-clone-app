import React from "react";
import PlaylistCard from "./PlaylistCard";
import "./Playlists.css";

const Playlists = (props) => {
	return (
		<div id='playlists'>
			<div className='section-title'>
				<h2>Albums</h2>
			</div>
			<div id='cards'>
				<PlaylistCard
					song={props.data.name}
					artist={props.data.artists[0].name}
					album={props.data.album.name}
					img={props.data.album.images[0].url}
					createdAt={props.data.album.release_date}
				/>
			</div>
		</div>
	);
};

export default Playlists;
