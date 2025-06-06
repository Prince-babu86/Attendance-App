import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, use, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export const dataContext = createContext();

const Wrapper = ({ children }) => {
  const [userdata, setuserdata] = useState(null);
  const [isloading, setisloading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userdata = docSnap.data();
         setisloading(false)
          setuserdata(userdata)
        } else {
          console.log("user not found");
        }
      }
    });

    return () => unsubscribe();
  }, []);





  return <dataContext.Provider value={{userdata , setuserdata , isloading}}>
    {children}
    </dataContext.Provider>;
};

export default Wrapper;
