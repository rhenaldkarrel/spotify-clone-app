import React from "react";

import Card from "./UI/Card";
import "./TrackCard.css";

const TrackCard = (props) => {
	return (
		<Card className='track-card'>
			<div className='content'>
				<div className='img'>
					<img src={props.img} alt='Album' />
				</div>
				<div className='song-title'>
					<h2>{props.song}</h2>
				</div>
				<div className='album-title'>
					<p>{props.album}</p>
				</div>
				<div className='artist'>
					<p>{props.artist}</p>
				</div>
				<div className='release-date'>
					<p>Published at {props.createdAt}</p>
				</div>
				<div className='select-song'>
					<button>Select</button>
				</div>
			</div>
		</Card>
	);
};

export default TrackCard;
