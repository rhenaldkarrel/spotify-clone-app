import React from "react";

import Card from "./UI/Card";
import "./FormCreatePlaylist.css";

const FormCreatePlaylist = () => {
	const handleSubmit = (e) => {
		alert(`Submitted`);
	};

	return (
		<Card>
			<div class='content'>
				<div class='title'>
					<h2>Create Playlist</h2>
				</div>
				<form class='form' onSubmit={() => handleSubmit()}>
					<div class='form-group'>
						<label for='title'>Title</label>
						<input
							type='text'
							id='title'
							required
							placeholder='Playlist Title'
						/>
					</div>
					<div class='form-group'>
						<label for='desc'>Description</label>
						<textarea
							id='desc'
							required
							placeholder='Playlist Description'></textarea>
					</div>
					<div class='form-group'>
						<button id='submit'>Create</button>
					</div>
				</form>
			</div>
		</Card>
	);
};

export default FormCreatePlaylist;
