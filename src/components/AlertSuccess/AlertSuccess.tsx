import styles from "./AlertSuccess.module.css";
import Card from "../UI/Card";

type AlertSuccessProps = {
	header: string;
	message: string;
	show: boolean;
	onClose: () => void;
};

const AlertSuccess = ({
	header,
	message,
	show,
	onClose,
}: AlertSuccessProps) => {
	if (!show) {
		return null;
	}
	return (
		<div className={styles.alertContainer}>
			<Card className={styles.alertSuccess}>
				<div className='alert-icon'>
					<div className={styles.successIcon}></div>
				</div>
				<div className={styles.informationContainer}>
					<div className='alert-title'>
						<h1 className='title'>{header}</h1>
					</div>
					<div className={styles.alertMessage}>
						<p>{message}</p>
					</div>
				</div>
				<div className='alert-button'>
					<button className='btn-primary' onClick={onClose}>
						Close
					</button>
				</div>
			</Card>
		</div>
	);
};

export default AlertSuccess;
