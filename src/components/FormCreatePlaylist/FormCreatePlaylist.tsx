import React from "react";

import Card from "../UI/Card";
import styles from "./FormCreatePlaylist.module.css";

type FormCreatePlaylistProps = {
	onClose: () => void;
	onSubmit: (event: React.FormEvent) => void;
	show: boolean;
};

const FormCreatePlaylist = ({
	onClose,
	onSubmit,
	show,
}: FormCreatePlaylistProps) => {
	if (!show) {
		return null;
	}

	return (
		<div className={styles.formContainer}>
			<Card className={styles.formCard}>
				<div className={styles.title}>
					<h2>Create Playlist</h2>
					<button className={styles.btnClose} onClick={onClose}>
						X
					</button>
				</div>
				<form className='form' onSubmit={onSubmit}>
					<div className={styles.formGroup}>
						<label htmlFor='title'>Title</label>
						<input
							type='text'
							id='title'
							required
							placeholder='Playlist Title'
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='desc'>Description</label>
						<textarea
							id='desc'
							required
							placeholder='Playlist Description'
							minLength={20}></textarea>
					</div>
					<div className={styles.formGroup}>
						<button id='submit'>Create</button>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default FormCreatePlaylist;
