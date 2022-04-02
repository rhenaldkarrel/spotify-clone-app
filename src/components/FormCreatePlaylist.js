import React from "react";

import Card from "./UI/Card";
import "./FormCreatePlaylist.css";

const FormCreatePlaylist = ({ onClose, onSubmit, show }) => {
	const handleSubmit = (e) => {
		alert(`Submitted`);
	};

	if (!show) {
		return null;
	}

	return (
		<div className='form-container' onClick={onClose}>
			<Card className='form-card'>
				<div className='title'>
					<h2>Create Playlist</h2>
					<button className='btn-close' onClick={onClose}>
						X
					</button>
				</div>
				<form className='form' onSubmit={() => onSubmit}>
					<div className='form-group'>
						<label htmlFor='title'>Title</label>
						<input
							type='text'
							id='title'
							required
							placeholder='Playlist Title'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='desc'>Description</label>
						<textarea
							id='desc'
							required
							placeholder='Playlist Description'></textarea>
					</div>
					<div className='form-group'>
						<button id='submit'>Create</button>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default FormCreatePlaylist;
