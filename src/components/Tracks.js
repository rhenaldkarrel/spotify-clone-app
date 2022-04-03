import React from "react";
import TrackCard from "./TrackCard";

const Tracks = ({ tracks, onSelectTrack, selectedTracks }) => {
	function renderTrackCards() {
		return tracks.map((track) => {
			return (
				<TrackCard
					key={track.id}
					track={track}
					onSelectTrack={onSelectTrack}
					isSelected={selectedTracks.includes(track)}
				/>
			);
		});
	}

	return <div className='result'>{renderTrackCards()}</div>;
};

export default Tracks;
