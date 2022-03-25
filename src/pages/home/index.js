import React from "react";

import FormCreatePlaylist from "../../components/FormCreatePlaylist";
import Tracks from "../../components/Tracks";

const Home = () => {
	return (
		<div>
			<FormCreatePlaylist />
			<Tracks />
		</div>
	);
};

export default Home;
