import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAiSCA7-86yFHxqJddg9a0iQ5LjxihfAJA",
  authDomain: "goalcoah-35a78.firebaseapp.com",
  databaseURL: "https://goalcoah-35a78.firebaseio.com",
  projectId: "goalcoah-35a78",
  storageBucket: "",
  messagingSenderId: "427537941413"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
