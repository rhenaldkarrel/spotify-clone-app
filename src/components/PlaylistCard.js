import React from "react";

import Card from "./UI/Card";
import "./PlaylistCard.css";

const PlaylistCard = (props) => {
	return (
		<Card className='playlist-card'>
			<div className='content'>
				<div className='img'>
					<img src={props.img} alt='Album' />
				</div>
				<div className='song-title'>
					<h2>{props.song}</h2>
				</div>
				<div className='album-title'>{props.album}</div>
				<div className='artist'>
					<p>{props.artist}</p>
				</div>
				<div className='release-date'>
					<p>Created at {props.createdAt}</p>
				</div>
				<div className='select-song'>
					<button>Select</button>
				</div>
			</div>
		</Card>
	);
};

export default PlaylistCard;
