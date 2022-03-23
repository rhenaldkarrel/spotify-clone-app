import React from "react";

import FormCreatePlaylist from "../../components/FormCreatePlaylist";
import Playlists from "../../components/Playlists";

const Home = () => {
	return (
		<div>
			<FormCreatePlaylist />
			<Playlists />
		</div>
	);
};

export default Home;
