import Card from "../UI/Card";
import "./PreviewSelectedTracks.css";
import { Track } from "types/spotify";

type PreviewSelectedTracksProps = {
	selectedTracks: Track[];
};

const PreviewSelectedTracks = ({
	selectedTracks,
}: PreviewSelectedTracksProps) => {
	return selectedTracks.map(
		(track: Track): JSX.Element => (
			<Card className='card-selected-tracks' key={track.id}>
				<div className='album-cover'>
					<img src={track.album.images[0].url} alt={track.album.name} />
				</div>
				<div className='prev-song-title'>
					<p>{track.name}</p>
				</div>
				<div className='prev-artist'>
					<p>{track.artists.map((artist) => artist.name).join(", ")}</p>
				</div>
			</Card>
		)
	);
};

export default PreviewSelectedTracks;
