import React from "react";
import TrackCard from "./TrackCard";
import "./Tracks.css";

const Tracks = ({ tracks, onSelectTrack, selectedTracks }) => {
	function renderTrackCards() {
		return tracks.map((track) => {
			return (
				<TrackCard
					key={track.id}
					track={track}
					onSelectTrack={onSelectTrack}
					isSelected={selectedTracks.find(
						(selectedTrack) => selectedTrack.id === track.id
					)}
				/>
			);
		});
	}

	return <div className='results'>{renderTrackCards()}</div>;
};

export default Tracks;
