import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// ── Configuración de Firebase ──
const firebaseConfig = {
  apiKey: "AIzaSyDl3XwsC2xEtIrdO9BiP3vcZoN8rNM6sJw",
  authDomain: "siscolab-9a4c7.firebaseapp.com",
  projectId: "siscolab-9a4c7",
  storageBucket: "siscolab-9a4c7.firebasestorage.app",
  messagingSenderId: "1031684243928",
  appId: "1:1031684243928:web:ef1656e788375958e232ad",
  measurementId: "G-7726GMJMX8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ── Función para exportar el Login con Google ──
export async function iniciarSesionGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    // Retornamos el nombre del usuario para que el script principal lo envíe a tu backend
    return result.user.displayName || result.user.email || "Usuario";
  } catch (error) {
    console.error("Error en Firebase Auth:", error.code, error.message);

    // Mensajes de error claros según el código de Firebase
    if (error.code === 'auth/unauthorized-domain') {
      alert(
        "❌ Dominio no autorizado en Firebase.\n\n" +
        "Para usar el login con Google debes abrir la app desde:\n" +
        "➜  http://localhost:3000\n\n" +
        "No la abras directamente como archivo (file://).\n" +
        "Si ya lo haces así, ve a Firebase Console → Authentication → Settings → Authorized domains y agrega 'localhost'."
      );
    } else if (error.code === 'auth/popup-closed-by-user') {
      // El usuario cerró el popup, no es un error real
      console.log("El usuario cerró el popup de Google.");
    } else if (error.code === 'auth/popup-blocked') {
      alert("❌ El navegador bloqueó el popup de Google.\nPor favor, permite los popups para localhost:3000 e intenta de nuevo.");
    } else if (error.code === 'auth/network-request-failed') {
      alert("❌ Sin conexión a internet. Verifica tu red e intenta de nuevo.");
    } else {
      alert("❌ Error al iniciar sesión con Google:\n" + error.message);
    }
    return null;
  }
}