import "./ErrorNotFound.css";

const ErrorNotFound = () => {
	return (
		<div className='not-found-container'>
			<div className='not-found-card'>
				<div className='not-found-emoji'>&#128580;</div>
				<div className='not-found-heading'>
					<h2>Oh boy! No tracks?!</h2>
				</div>
				<div className='not-found-message'>
					Hmm, make sure you have typed the right keyword...
				</div>
			</div>
		</div>
	);
};

export default ErrorNotFound;
