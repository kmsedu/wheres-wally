import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: 'AIzaSyDwYS_HYqyNWz95RQAsgKJgjbzYYllDddU',
  authDomain: 'wheres-wally-a7ab2.firebaseapp.com',
  projectId: 'wheres-wally-a7ab2',
  storageBucket: 'wheres-wally-a7ab2.appspot.com',
  messagingSenderId: '707897414950',
  appId: '1:707897414950:web:ef8a8bff37ed61b2a31de7',
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export {firebaseApp, firestore};
