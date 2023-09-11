import React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";



// Authentication Hook
export function useAuth(){
    const [currentUser, setCurrentUser] = useState()

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unsub;
    }, [])

    return currentUser;
}


// Storage Hook
export async function upload(file, currentUser, fileRef, setLoading){

    setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);

    setLoading(false);
    alert('File Uploaded');
}