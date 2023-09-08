import React from 'react';
import { useState, useEffect} from 'react';
import { auth, storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged } from "firebase/auth";

export default function MyPlants() {

    const [authUser, setAuthUser] = useState('')
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    // -------------- Authenticate User Signed in ------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                // console.log(user.uid)
            } else {
              setAuthUser('')
            }  
        }, [authUser])
    });

    // ---------------- Variables ----------------------
    const userId = authUser.uid;
    const imageUrlsRef = ref(storage, `${userId}/images/`);

    // ------- useEffect to display images ------------
    // need to tell firebase to get all the images in a specific reference path
    useEffect(()=>{
        // console.log(imageUrls)
        listAll(imageUrlsRef).then((response)=>{
        //    console.log(response.items);
           response.items.forEach((item) => {
                getDownloadURL(item).then((url) =>{
                    // console.log(url)
                     if (imageUrls.includes(url)){

                     } else{
                        setImageUrls((prev) => [...prev, url])
                     }
                })
           })
    })
    });

    // ---------------- Setting all unique values in array ---------
    let uniqueImageUrls = Array.from(new Set(imageUrls));


  return (
    <div className='home-container'>

        <div>MyPlants</div>

        {/* Displaying Images from firebase */}
        {uniqueImageUrls.map((url, index) => {
            return (
            <img key={index} src={url}/>
            )
        })}

    </div>
  )
}
