import TrackCard from "../TrackCard/TrackCard";
import styles from "./Tracks.module.css";

const Tracks = ({ tracks, onSelectTrack, selectedTracks }) => {
	function renderTrackCards() {
		return (
			<>
				{tracks.map((track) => (
					<TrackCard
						key={track.id}
						track={track}
						onSelectTrack={onSelectTrack}
						isSelected={selectedTracks.find(
							(selectedTrack) => selectedTrack.id === track.id
						)}
					/>
				))}
			</>
		);
	}

	return <div className={styles.results}>{renderTrackCards()}</div>;
};

export default Tracks;
