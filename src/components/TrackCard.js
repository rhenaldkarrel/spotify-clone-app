import React from "react";

import Card from "./UI/Card";
import "./TrackCard.css";

const TrackCard = ({
	albumCover,
	songTitle,
	albumTitle,
	duration,
	artistName,
	onClick,
	selected,
}) => {
	return (
		<Card className='track-card'>
			<div className='img'>
				<img src={albumCover} alt='Album' />
			</div>
			<div className='track-informations'>
				<div className='song-infos'>
					<div className='song-title'>
						<p>{songTitle}</p>
					</div>
					<div className='artist'>
						<p>{artistName}</p>
					</div>
				</div>
				<div className='album-info'>
					<div className='album-title'>
						<p>{albumTitle}</p>
					</div>
				</div>
				<div className='track-duration'>
					<div className='duration'>
						<p>{duration}</p>
					</div>
				</div>
				<div className='option'>
					<div className='select-song'>
						{selected ? (
							<button className='btn-selected' onClick={onClick}>
								Deselect
							</button>
						) : (
							<button onClick={onClick}>Select</button>
						)}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default TrackCard;
