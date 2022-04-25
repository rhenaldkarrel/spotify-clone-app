import { convertDuration } from "../../functions/functions";
import Card from "../UI/Card";
import styles from "./TrackCard.module.css";
import { Track } from "../../types/spotify";
import { Artist } from "types/spotify";
type TrackCardProps = {
	track: Track;
	isSelected: boolean;
	onSelectTrack: (track: Track) => void;
};

const TrackCard = ({ track, isSelected, onSelectTrack }: TrackCardProps) => {
	return (
		<Card className={styles.trackCard} data-testid='trackCard'>
			<div className={styles.img}>
				<img src={track.album.images[0].url} alt='Album' />
			</div>
			<div className={styles.trackInformations}>
				<div className='song-infos'>
					<div className={styles.songTitle}>
						<p>{track.name}</p>
					</div>
					<div className={styles.artist}>
						<p>
							{track.artists.map((artist: Artist) => artist.name).join(", ")}
						</p>
					</div>
				</div>
				<div className='album-info'>
					<div className={styles.albumTitle}>
						<p>{track.album.name}</p>
					</div>
				</div>
				<div className='track-duration'>
					<div className='duration'>
						<p>{convertDuration(track.duration_ms)}</p>
					</div>
				</div>
				<div className={styles.option}>
					<div className={styles.selectSong}>
						<button
							className={
								isSelected ? `${styles.btnDeselect}` : styles.btnSelect
							}
							onClick={() => onSelectTrack(track)}>
							{!isSelected ? "Select" : "Deselect"}
						</button>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default TrackCard;
