import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import { FooterContainer } from "../containers/footerContainer";
import { HeaderContainer } from "../containers/headerContainer";
import * as ROUTES from "../constants/routes";

export default function SignIn() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	// Validate elements
	const isInvalid = password === "" || email === "";

	const handleSignIn = (event) => {
		event.preventDefault();

		// Firebase Auth
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmail("");
				setPassword("");
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignIn} method="POST">
						<Form.Input
							type="text"
							placeholder="Email or Phone number"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<Form.Input
							type="password"
							autoComplete="off"
							placeholder="Password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.SubmitButton disabled={isInvalid} type="submit">
							Sign In
						</Form.SubmitButton>
					</Form.Base>
					<Form.Text>
						New to Netflix? <Form.Link to="/signup">Sign Up</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
