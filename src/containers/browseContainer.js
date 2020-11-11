import React, { useState, useContext, useEffect } from "react";
import { SelectProfilesContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";

export default function BrowseContainer({ slides }) {
	const [profile, setProfile] = useState({});
	const { firebase } = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};

	return <SelectProfilesContainer user={user} setProfile={setProfile} />;
}
