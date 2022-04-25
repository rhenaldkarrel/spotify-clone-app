// Redux
import { useTypedSelector } from "hooks/typedReduxHooks";

import styles from "./Navigation.module.css";

type NavigationProps = {
	logo: string;
	modalShow: () => void;
	isDisplayed: boolean;
	logout: () => void;
	handleReset: () => void;
};

const Navigation = ({
	logo,
	modalShow,
	logout,
	isDisplayed,
	handleReset,
}: NavigationProps) => {
	// User Informations
	const userName = useTypedSelector(
		(state) => state.auth.userInfo?.display_name
	);
	const userImage = useTypedSelector(
		(state) => state.auth.userInfo?.images[0].url
	);

	return (
		<nav>
			<div className={styles.navContainer}>
				<div className='nav-brand'>
					<img src={logo} alt='Spotify Logo' />
				</div>
				<div className={styles.navList}>
					<div className={styles.userInfo}>
						<img src={userImage} alt='My Avatar' />
						<p>Hello, {userName}!</p>
					</div>
					<div className={styles.btnActionGroup}>
						<button
							className={styles.btnCreate}
							style={isDisplayed ? { display: "block" } : { display: "none" }}
							onClick={modalShow}>
							Create Playlist
						</button>
						<button
							className={styles.btnDeselectAll}
							style={isDisplayed ? { display: "block" } : { display: "none" }}
							onClick={handleReset}>
							Deselect All
						</button>
					</div>
					<button className={styles.btnLogout} onClick={logout}>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
