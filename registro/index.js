import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtOKcoCxyXNPuSxqh9Onc2rRfkW31csTg",
  authDomain: "certus-jimena.firebaseapp.com",
  projectId: "certus-jimena",
  storageBucket: "certus-jimena.appspot.com",
  messagingSenderId: "760533627043",
  appId: "1:760533627043:web:af7d59d68f11311408cf16",
  measurementId: "G-KHV0H439CM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = registerForm['email'].value;
  const password = registerForm['password'].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem('tienditaFelizUser', JSON.stringify(user));
      registerForm.reset();
      alert(localStorage.getItem('tienditaFelizUser'));
      window.location.href = '../';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`
        ${errorCode}
        ${errorMessage}`
      );
    });
});