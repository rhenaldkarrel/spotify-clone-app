import "./Login.css";

const Login = ({ onClick, logo }) => {
	return (
		<div className='container-welcome'>
			<div className='welcome'>
				<img src={logo} alt='Spotify Logo' />
				<h1>&#x1F44B; Welcome to Rhenald's Spotify Clone App!</h1>
				<button onClick={onClick} className='btn-primary'>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
