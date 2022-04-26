import { Suspense } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { useTypedSelector } from "hooks/typedReduxHooks";

// Components
import Login from "pages/login";
import PrivateRouter from "./privateRouter";
import { Routers } from "./root.routers";
import Loader from "components/Loader/Loader";

const RouterList = () => {
	const isAuthenticated = useTypedSelector(
		(state) => state.auth.isAuthenticated
	);

	return (
		<Suspense fallback={<Loader />}>
			<Router>
				<Switch>
					<Route
						exact
						path='/'
						render={() =>
							isAuthenticated ? <Redirect to='/create-playlist' /> : <Login />
						}
					/>
					{Routers.map((route) => (
						<PrivateRouter
							key={route.path}
							path={route.path}
							component={route.component}
						/>
					))}
				</Switch>
			</Router>
		</Suspense>
	);
};

export default RouterList;
