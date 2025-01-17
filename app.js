import { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup, 
  db, 
  doc, 
  setDoc, 
  getDocs, 
  collection, 
  deleteDoc 
} from "./firebase.js";

// ✅ SIGN UP FUNCTION (Email & Password Only)
let signUp = async () => {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      uid: user.uid
    });

    alert("Account created successfully!");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Error: " + error.message);
    console.error("Sign Up Error:", error);
  }
};

// ✅ LOGIN FUNCTION (Fixing auth/invalid-credential error)
let logIn = async (event) => {
  event.preventDefault();  // Prevent form refresh
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User Logged In:", user);
    
    alert("Login Successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Login Error:", error);
    console.error(error)
    

    
  }
};


// ✅ GOOGLE SIGN-IN FUNCTION (Fixing Provider Import)
let googleSignup = async () => {
  const provider = new GoogleAuthProvider(); // Ensure the provider is instantiated inside the function

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email
    });

    alert("Google Sign-In Successful!");
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    alert("Google Sign-In Failed: " + error.message);
  }
};

// ✅ FETCH ALL USERS
let getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => `, doc.data());
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

// ✅ DELETE ACCOUNT FUNCTION
let deleteAccount = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      alert("No user logged in!");
      return;
    }

    await deleteDoc(doc(db, "users", user.uid));
    alert("Account Deleted!");
  } catch (error) {
    console.error("Delete Account Error:", error);
    alert("Failed to delete account: " + error.message);
  }
};

// ✅ EVENT LISTENERS (Fixed Placement)
document.getElementById("loginForm").addEventListener("submit", logIn);
document.getElementById("googleAuth").addEventListener("click", googleSignup);
