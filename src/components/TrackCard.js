import React, { useState } from "react";

import Card from "./UI/Card";
import "./TrackCard.css";

const TrackCard = (props) => {
	return (
		<Card className='track-card'>
			<div className='img'>
				<img src={props.img} alt='Album' />
			</div>
			<div className='track-informations'>
				<div className='song-infos'>
					<div className='song-title'>
						<p>{props.song}</p>
					</div>
					<div className='artist'>
						<p>{props.artist}</p>
					</div>
				</div>
				<div className='album-info'>
					<div className='album-title'>
						<p>{props.album}</p>
					</div>
				</div>
				<div className='created-at'>
					<div className='release-date'>
						<p>Published at {props.createdAt}</p>
					</div>
				</div>
				<div className='option'>
					<div className='select-song'>
						{props.selected ? (
							<button className='btn-selected' onClick={props.onselect}>
								Deselect
							</button>
						) : (
							<button onClick={props.onselect}>Select</button>
						)}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default TrackCard;
