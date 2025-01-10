// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, deleteUser, signInWithEmailAndPassword, reauthenticateWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";  // Solo Firestore

const firebaseConfig = {
  apiKey
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar la autenticación de Firebase
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Inicializar Firestore
const db = getFirestore(app);  // Asegúrate de inicializar Firestore

export { auth, provider, db, deleteUser, signInWithEmailAndPassword, reauthenticateWithPopup , };  // Exporta las funciones necesarias
