import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
	apiKey: "AIzaSyC0dTXZHRxxStm5O8PJauknVYkvbw6I8_w",
	authDomain: "netflix-9f4db.firebaseapp.com",
	databaseURL: "https://netflix-9f4db.firebaseio.com",
	projectId: "netflix-9f4db",
	storageBucket: "netflix-9f4db.appspot.com",
	messagingSenderId: "723262683147",
	appId: "1:723262683147:web:4010c926fc20950d29ef0e",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
