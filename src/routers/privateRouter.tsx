import { Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "hooks/typedReduxHooks";

const PrivateRouter = ({ ...routerProps }) => {
	const isAuthenticated = useTypedSelector(
		(state) => state.auth.isAuthenticated
	);

	if (isAuthenticated) {
		return <Route {...routerProps} />;
	}

	return <Redirect to='/' />;
};

export default PrivateRouter;
