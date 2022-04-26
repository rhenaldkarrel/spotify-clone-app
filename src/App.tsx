import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

// Redux
import { useTypedSelector } from "hooks/typedReduxHooks";

// Pages
import Home from "./pages/home/index";
import LoginPage from "./pages/login/index";

const App = () => {
	const isLogin = useTypedSelector((state) => state.auth.isAuthenticated);

	return (
		<Router>
			<Switch>
				<Route path='/create-playlist'>
					{!isLogin ? (
						<Redirect exact from='/create-playlist' to='/' />
					) : (
						<Home />
					)}
				</Route>
				<Route path='/'>
					{isLogin ? (
						<Redirect exact from='/' to='/create-playlist' />
					) : (
						<LoginPage />
					)}
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
