import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Browse from "./pages/browse";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

export default function App() {
	return (
		<Router>
			<Route exact path={ROUTES.HOME}>
				<Home />
			</Route>
			<Route exact path={ROUTES.SIGN_IN}>
				<SignIn />
			</Route>
			<Route exact path={ROUTES.SIGN_UP}>
				<SignUp />
			</Route>
			<Route exact path={ROUTES.BROWSE}>
				<Browse />
			</Route>
		</Router>
	);
}
