import React from "react";
import PlaylistCard from "./PlaylistCard";
import "./Playlists.css";

const Playlists = (props) => {
	return (
		<div id='playlists'>
			<div className='title'>
				<h2>Created Playlists</h2>
			</div>
			<div id='cards'>
				<PlaylistCard
					artists={props.items[0].artists}
					albums={props.items[0].albums}
					img={props.items[0].img}
					createdAt={props.items[0].createdAt}
				/>
				<PlaylistCard
					artists={props.items[1].artists}
					albums={props.items[1].albums}
					img={props.items[1].img}
					createdAt={props.items[1].createdAt}
				/>
				<PlaylistCard
					artists={props.items[2].artists}
					albums={props.items[2].albums}
					img={props.items[2].img}
					createdAt={props.items[2].createdAt}
				/>
				<PlaylistCard
					artists={props.items[3].artists}
					albums={props.items[3].albums}
					img={props.items[3].img}
					createdAt={props.items[3].createdAt}
				/>
				<PlaylistCard
					artists={props.items[4].artists}
					albums={props.items[4].albums}
					img={props.items[4].img}
					createdAt={props.items[4].createdAt}
				/>
				<PlaylistCard
					artists={props.items[5].artists}
					albums={props.items[5].albums}
					img={props.items[5].img}
					createdAt={props.items[5].createdAt}
				/>
				<PlaylistCard
					artists={props.items[6].artists}
					albums={props.items[6].albums}
					img={props.items[6].img}
					createdAt={props.items[6].createdAt}
				/>
				<PlaylistCard
					artists={props.items[7].artists}
					albums={props.items[7].albums}
					img={props.items[7].img}
					createdAt={props.items[7].createdAt}
				/>
			</div>
		</div>
	);
};

export default Playlists;
