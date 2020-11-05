import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import { FooterContainer } from "../containers/footerContainer";
import { HeaderContainer } from "../containers/headerContainer";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);

	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isInvalid = firstName === "" || email === "" || password === "";

	const handleSignUp = (event) => {
		event.preventDefault();

		// create user
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1,
					})
					.then(() => {
						history.push(ROUTES.BROWSE);
					});
			})
			.catch((error) => {
				setFirstName("");
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
					<Form.Base onSubmit={handleSignUp} method="POST">
						<Form.Input
							type="text"
							placeholder="First Name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
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
							Sign Up
						</Form.SubmitButton>
					</Form.Base>
					<Form.Text>
						Already a User? <Form.Link to="/signin">Sign In</Form.Link>
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
