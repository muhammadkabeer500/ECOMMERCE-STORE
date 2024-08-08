 import { auth,createUserWithEmailAndPassword } from './firebase.js';
 
 

const form = document.querySelector("#signup-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get form values using their IDs
  const fullname = document.querySelector("#fullname").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;



  try {
    // Create a new user with email and password
    let result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
    

    // Redirect to the dashboard page
    window.location.href = "./dashboard.html";
  } catch (error) {
    console.error("Error signing up:", error);
  }
 });