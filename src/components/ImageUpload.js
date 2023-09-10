import React from 'react';
import { useState, useEffect} from 'react';
import { auth, storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged } from "firebase/auth";


export default function ImageUpload() {

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
    // console.log(authUser)
    const userId = authUser.uid;


    const imageUrlsRef = ref(storage, `${userId}/images/`);
    // console.log(imageUrlsRef)
    // ------------ Function to upload Image ------------
    const uploadImage = () =>{
        if( imageUpload == null ) return;
        // creating a reference for the image 
        // will need to tie this back to the user
        let imageRef = ref(storage, `${userId}/images/${imageUpload.name}`);

        // 
        uploadBytes(imageRef, imageUpload)
        .then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((url)=>{
                setImageUrls((prev) => [...prev, url])
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.error(errorCode, errorMessage)
        })
    };


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

    // console.log(imageUrls);
    let uniqueImageUrls = Array.from(new Set(imageUrls));
    // console.log(uniqueImageUrls)

    // console.log(imageUrlsRef);

  return (
    <>
        <div>ImageUpload</div>
        <div className='home-container'>
            <input type='file' onChange={(event)=>{setImageUpload(event.target.files[0])}}/>
            <button onClick={uploadImage}>Upload Image</button>
        </div>

        {/* Displaying Images from firebase */}
        {uniqueImageUrls.map((url, index) => {
            return (
            <img key={index} src={url}/>
            )
        })}
    </>
  )
}

