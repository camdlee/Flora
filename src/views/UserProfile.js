import React from 'react'
import { useState, useEffect } from 'react';
import { userParams } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import ProfileCard from '../components/ProfileCard';


export default function UserProfile() {

    // const { userId } = useParams();
    const [authUser, setAuthUser] = useState('')

  // ---------------------------------useEffect hook to authenticate users-----------------------------------
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user)
            // console.log(user)
            const uid = user.uid;
            // ...
        } else {
          setAuthUser('')
        }  
      }, [authUser])
      })
   
      // console.log(authUser)

return(
    <>
        <main>
        {/* <h1>This is {authUser.displayName}'s profile page</h1> */}
        <h2></h2>
          <ProfileCard
            id={authUser.uid}
            displayName={authUser.displayName}
            email={authUser.email}
            profilePic={authUser.photoURL}
          />
        </main>
    </>
    )    
}
