import { convertDuration } from "../../functions/functions";
import Card from "../UI/Card";
import "./TrackCard.css";
import { Track } from "../../types/spotify";

type TrackCardProps = {
	track: Track;
	isSelected: boolean;
	onSelectTrack: any;
};

const TrackCard = ({ track, isSelected, onSelectTrack }: TrackCardProps) => {
	return (
		<Card className='track-card'>
			<div className='img'>
				<img src={track.album.images[0].url} alt='Album' />
			</div>
			<div className='track-informations'>
				<div className='song-infos'>
					<div className='song-title'>
						<p>{track.name}</p>
					</div>
					<div className='artist'>
						<p>{track.artists.map((artist) => artist.name).join(", ")}</p>
					</div>
				</div>
				<div className='album-info'>
					<div className='album-title'>
						<p>{track.album.name}</p>
					</div>
				</div>
				<div className='track-duration'>
					<div className='duration'>
						<p>{convertDuration(track.duration_ms)}</p>
					</div>
				</div>
				<div className='option'>
					<div className='select-song'>
						<button
							className={isSelected ? " btn-deselect" : ""}
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
