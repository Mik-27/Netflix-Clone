import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Browse from "./pages/browse";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import { UserRedirect, ProtectedRoute } from "./helpers/routes";
import useAuthListener from "./hooks/use-auth-listener";

export default function App() {
	const { user } = useAuthListener();
	console.log(user);
	return (
		<Router>
			<Switch>
				<UserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_IN}
					exact
				>
					<SignIn />
				</UserRedirect>
				<UserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_UP}
					exact
				>
					<SignUp />
				</UserRedirect>
				<ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
					<Browse />
				</ProtectedRoute>
				<UserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.HOME}
					exact
				>
					<Home />
				</UserRedirect>
			</Switch>
		</Router>
	);
}
