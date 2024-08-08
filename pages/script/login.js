import {auth, signInWithEmailAndPassword ,}from'./firebase.js'



const form = document.querySelector("#login-form");
const msgDiv =document.querySelector("#msg")

form.addEventListener("submit", async (event) => {
  try {
      event.preventDefault();
      msgDiv.innerText="loading...."
  
      const email = event.target.children[0].value;
      const password = event.target.children[1].value;

      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
        
      }); 
  
      let result = await signInWithEmailAndPassword(auth,email,password);

      window.location.href="./dashboard.html"

       console.log(result);
  
  } catch (error) {
    swal({
      title: "WRONG",
      text: "Error",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    
    });
    msgDiv.innerText=error.message || "koi error hy"
    console.log("my error msg ", error.message);
  }





    // console.log("email", email);
    // console.log("password", password);
});