import firebase from 'firebase';

const configKeys = {
  apiKey: 'AIzaSyBoO-dyO4PywqOJJVLDAucttJLMlM5N3vs',
  authDomain: 'diabetipsoficial.firebaseapp.com',
  databaseURL: 'https://diabetipsoficial.firebaseio.com',
  projectId: 'diabetipsoficial',
  storageBucket: 'diabetipsoficial.appspot.com',
  messagingSenderId: '1025645095828',
};

const Config = firebase.initializeApp(configKeys);

export { Config };
