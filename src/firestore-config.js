import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDREpOEaT1zUyylHDOBcLPhNLc5mN5CfeI",
    authDomain: "habittracker-20742.firebaseapp.com",
    projectId: "habittracker-20742",
    storageBucket: "habittracker-20742.appspot.com",
    messagingSenderId: "421157935067",
    appId: "1:421157935067:web:0b7af7995e26fa2d91b9fe"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

// async function TestingDataMovement()
// {
//   try{
//     const testTaskGroupRef = doc(database, "users", "testUser", "tasks", "testTaskGroup");

//     const testTaskGroupData = {
//       title: "Sport",
//       testTask: {
//         id: 5,
//         status: false,
//         title: "jogging",
//         text: "gotta go fast"
//       }
//     }
//     setDoc(testTaskGroupRef, testTaskGroupData, { merge: true });
//   } catch{
//     console.log("Failed to update task information :: setDoc");
//   }
// } 

//TestingDataMovement();

