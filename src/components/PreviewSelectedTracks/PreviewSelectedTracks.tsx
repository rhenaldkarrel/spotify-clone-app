import Card from "../UI/Card";
import styles from "./PreviewSelectedTracks.module.css";
import { Track } from "types/spotify";

const PreviewSelectedTracks = ({ selectedTracks }) => {
	return selectedTracks.map((track: Track) => (
		<Card className={styles.cardSelectedTracks} key={track.id}>
			<div className={styles.albumCover}>
				<img src={track.album.images[0].url} alt={track.album.name} />
			</div>
			<div className={styles.prevSongTitle}>
				<p>{track.name}</p>
			</div>
			<div className={styles.prevArtist}>
				<p>{track.artists.map((artist) => artist.name).join(", ")}</p>
			</div>
		</Card>
	));
};

export default PreviewSelectedTracks;
