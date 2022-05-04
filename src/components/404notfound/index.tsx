import styles from "./index.module.css";

const ErrorNotFound = () => {
	return (
		<div className={styles.notFoundContainer}>
			<div className={styles.notFoundCard}>
				<div className={styles.notFoundEmoji}>&#128580;</div>
				<div className='alert-title'>
					<h2>Oh boy! No tracks?!</h2>
				</div>
				<div className={styles.notFoundMessage}>
					Hmm, make sure you have typed the right keyword...
				</div>
			</div>
		</div>
	);
};

export default ErrorNotFound;
