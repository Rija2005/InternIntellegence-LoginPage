import {
  auth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "./firebase.js";



// Login with Email and Password
const signIn = () => {
  const email = document.getElementById("email1").value;
  const password = document.getElementById("password1").value;

  if (!email || !password) {
    Swal.fire({
      icon: "error",
      title: "Missing Information",
      text: "Please enter both email and password.",
    });
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Successfully Logged In:", user);

      // Display success message
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${user.email}!`,
        showConfirmButton: false,
        timer: 2000,
      });

      // Redirect to another page (e.g., dashboard.html)
      setTimeout(() => {
        window.location.href = "dashboard.html"; // Change to your actual dashboard page
      }, 2000);
    })
    .catch((error) => {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);

      let errorMessage = "An error occurred. Please try again.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "No user found with this email.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email format.";
      }

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });
    });
};

// Google Authentication
const googleSignIn = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Google Sign-In successful:", result.user);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${result.user.displayName}!`,
        showConfirmButton: false,
        timer: 2000,
      });

      // Redirect to another page (e.g., dashboard.html)
      setTimeout(() => {
        window.location.href = "dashboard.html"; // Change to your actual dashboard page
      }, 2000);
    })
    .catch((error) => {
      console.error("Google Sign-In error:", error.message);

      Swal.fire({
        icon: "error",
        title: "Google Sign-In Failed",
        text: "An error occurred while signing in with Google.",
      });
    });
};

// Event Listeners
document.getElementById("signin").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  signIn();
});

document.getElementById("googleAuth").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default button behavior
  googleSignIn();
});
