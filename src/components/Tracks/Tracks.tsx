import React from "react";
import TrackCard from "../TrackCard/TrackCard";
import "./Tracks.css";
import { Track } from "types/spotify";

type TracksProps = {
	tracks: Track[];
	onSelectTrack: (track: Track) => void;
	selectedTracks?: Track[];
};

const Tracks = ({ tracks, onSelectTrack, selectedTracks }: TracksProps) => {
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
