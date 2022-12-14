import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc } from "firebase/firestore";

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
export const userDoc = GetUserData();
export const tasks_collection = GetRemoteTaskData();

async function GetUserData()
{
    try{
        const userDoc = doc(database, "users/testUser"); // DEBUG, "testUser" should be replaced with a valid UID
        return userDoc;
    } catch{
        console.log("Failed to get remote user data :: GetUserData() :: firestore-config.js");
    }
}

async function GetRemoteTaskData(){
    try{
      const testTasksRef = collection(database, "users/testUser/tasks");
      return testTasksRef;
    } catch {
      console.log("Failed to get remote TASKS data :: GetRemoteTaskData() :: firestore-config.js");
    }
  }
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

