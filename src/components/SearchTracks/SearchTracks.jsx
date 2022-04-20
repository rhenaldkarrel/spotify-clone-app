import React from "react";
import "./SearchTracks.css";

const SearchTracks = ({ onSubmit, onChange }) => {
	return (
		<div className='search-container'>
			<form action='#' onSubmit={onSubmit}>
				<input
					className='input-search'
					type='text'
					placeholder='Type your track...'
					onChange={onChange}
				/>
				<button>Search</button>
			</form>
		</div>
	);
};

export default SearchTracks;
