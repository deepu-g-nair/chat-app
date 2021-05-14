import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCpHhJWp3uYnMQtiozY1o1Z8Wgd9RmT_AQ",
  authDomain: "chat-web-app-875e4.firebaseapp.com",
  projectId: "chat-web-app-875e4",
  storageBucket: "chat-web-app-875e4.appspot.com",
  messagingSenderId: "17455196600",
  appId: "1:17455196600:web:6f78bc4474d3e07711c74d",
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
