import { auth, onAuthStateChanged } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "pages/dashboard.html";
    } else {
        window.location.href = "pages/login.html";
    }
});

