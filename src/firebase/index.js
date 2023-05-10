
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: 'AIzaSyDJNAqtbNl1bj6ym80jR9zI2L7ynnrPtK4',
  authDomain: 'pillpillsea.firebaseapp.com',
  databaseURL: 'https://pillpillsea-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'pillpillsea',
  storageBucket: 'pillpillsea.appspot.com',
  messagingSenderId: '887850680915',
  appId: '1:887850680915:web:8ce350873b64c203647ca6',
  measurementId: 'G-YTJ23TKT6N'
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const database = getDatabase(app)

export {
    auth,
    database
}