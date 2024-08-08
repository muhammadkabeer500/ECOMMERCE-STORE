


// -------------------------------------------------------------------------------

import { auth, signOut, onAuthStateChanged, db, collection, addDoc, serverTimestamp, getDocs, onSnapshot } from "./Firebase.js";

const userEmailDiv = document.querySelector("#user-email");
const logoutBtn = document.querySelector("#logout-btn");
const form = document.querySelector("#product-form");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDetail = document.querySelector("#product-detail");
const allProducts = document.querySelector(".all-products");

const myCollectionReference = collection(db, "products");

// Auth state change listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("onAuthStateChanged user:", user);
        userEmailDiv.innerHTML = user.email;
    } else {
        window.location = "./login.html";
        console.log("User is signed out");
    }
});

// Logout button event listener
logoutBtn.addEventListener('click', async () => {
    try {
        await signOut(auth);
        console.log("Sign-out successful");
    } catch (error) {
        console.log("Error during sign-out:", error);
    }
});

// Form submission event listener
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const myProduct = {
        productName: productName.value,
        productPrice: Number(productPrice.value),
        productImg: null,
        productDetail: productDetail.value,
        createdAt: serverTimestamp(),
    };

    try {
        await addDoc(myCollectionReference, myProduct);
        console.log("Document added successfully");
        form.reset();
    } catch (error) {
        console.log("Error adding document:", error);
    }
});

// Fetch initial data
const fetchInitialData = async () => {
    const querySnapshot = await getDocs(myCollectionReference);

    querySnapshot.forEach((doc) => {
        const product = doc.data();

        allProducts.innerHTML += `<div>
            <h3>${product.productName?.toUpperCase()}</h3>
            <p class="price">Rs.${product.productPrice}</p>
            <p>${product.productDetail}</p>
        </div>`;
    });
};

// Real-time updates
onSnapshot(myCollectionReference, (snapshot) => {
    allProducts.innerHTML = "";

    snapshot.docs.forEach((doc, index) => {
        const product = doc.data();

        allProducts.innerHTML += `<div>
            ${index + 1}
            <h3>${product.productName}</h3>
            <p class="price">Rs.${product.productPrice}</p>
            <p>${product.productDetail}</p>
        </div>`;
    });
});

// Initialize fetching initial data
fetchInitialData();
