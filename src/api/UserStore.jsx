import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // your configured Firebase file

export const fetchAllUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    const snapshot = await getDocs(usersRef);
    const users = snapshot.docs.map(doc => ({
      id: doc.id, // UID
      ...doc.data()
    }));
    console.log(users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
