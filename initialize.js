
 // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import{ getFirestore,collection,getDocs,setDoc ,doc,addDoc} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDfNbJWkgDZa-PCW5W8pIz_gKo5z1uIsMI",
    authDomain: "demoproject-2c5f0.firebaseapp.com",
    projectId: "demoproject-2c5f0",
    storageBucket: "demoproject-2c5f0.appspot.com",
    messagingSenderId: "867804819426",
    appId: "1:867804819426:web:ae34732c7f4ff9b1f053bb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getFirestore(app);

  export { db };
  const colRef=collection(db,"students");
  
            