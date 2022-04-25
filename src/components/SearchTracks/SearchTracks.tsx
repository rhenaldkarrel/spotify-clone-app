import React from "react";
import styles from "./SearchTracks.module.css";

type SearchTracksProps = {
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchTracks = ({ onSubmit, onChange }: SearchTracksProps) => {
	return (
		<div className={styles.searchContainer}>
			<form action='#' onSubmit={onSubmit} className={styles.formSearch}>
				<input
					className={styles.inputSearch}
					type='text'
					placeholder='Find your track...'
					onChange={onChange}
					required
				/>
				<button className={styles.btnSearch}>Search</button>
			</form>
		</div>
	);
};

export default SearchTracks;
