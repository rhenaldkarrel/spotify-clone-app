import Playlists from "./components/Playlists";
import FormCreatePlaylist from "./components/FormCreatePlaylist";
import data from "./data";

const App = () => {
	return (
		<div>
			<FormCreatePlaylist />
			<Playlists data={data} />
		</div>
	);
};

export default App;
