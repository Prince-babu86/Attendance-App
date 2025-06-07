import { onAuthStateChanged } from "firebase/auth";
import React, {
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, db } from "../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const dataContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState(null);
  const [isloading, setisloading] = useState(true);

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

  return (
    <dataContext.Provider value={{ userdata, setuserdata, isloading , setisloading }}>
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => useContext(dataContext);
