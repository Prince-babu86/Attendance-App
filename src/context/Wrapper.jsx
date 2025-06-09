import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase.config";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export const dataContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState(null);
  const [isloading, setisloading] = useState(true);

  const [users, setusers] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userdata = docSnap.data();
          setuserdata(userdata);
          setisloading(false);
        } else {
          console.log("user not found");
          setisloading(false);
        }
      } else {
        setisloading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const usersRef = collection(db, "users");
        const snapshot = await getDocs(usersRef);
        const users = snapshot.docs.map((doc) => ({
          id: doc.id, // UID
          ...doc.data(),
        }));
        setusers(users);
        return users;
      } catch (error) {
        console.error("Error fetching users:", error);
        return [];
      }
    };

    fetchAllUsers();
  }, []);

 

  return (
    <dataContext.Provider
      value={{ userdata, setuserdata, isloading, setisloading, users , setusers }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => useContext(dataContext);
