import React from "react";
import "./SearchTracks.css";

type SearchTracksProps = {
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchTracks = ({ onSubmit, onChange }: SearchTracksProps) => {
	return (
		<div className='search-container'>
			<form action='#' onSubmit={onSubmit}>
				<input
					className='input-search'
					type='text'
					placeholder='Find your track...'
					onChange={onChange}
				/>
				<button>Search</button>
			</form>
		</div>
	);
};

export default SearchTracks;
