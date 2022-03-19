import React from "react";

import Card from "./UI/Card";
import "./PlaylistCard.css";

const PlaylistCard = (props) => {
	return (
		<Card className='playlist-card'>
			<div class='content'>
				<div class='img'>
					<img src={props.img} alt='Album' />
				</div>
				<div class='album'>
					<h2>{props.album}</h2>
				</div>
				<div class='artist'>
					<p>{props.artist}</p>
				</div>
				<div class='release-date'>
					<p>Created at {props.createdAt}</p>
				</div>
				<div class='open-album'>
					<button>Open Playlist</button>
				</div>
			</div>
		</Card>
	);
};

export default PlaylistCard;
