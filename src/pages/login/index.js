// Authorization
import { authSpotify } from "../../auth/api";

// Components
import Login from "../../components/Login";
import logo from "../../spotify-logo.png";

const LoginPage = () => {
	return <Login onClick={authSpotify} logo={logo} />;
};

export default LoginPage;
