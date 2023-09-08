import React from 'react';
import { useState, } from 'react';
import { auth, storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';


export default function ImageUpload() {

    const [imageUpload, setImageUpload] = useState(null);

    // user data
    const user = auth.currentUser;
    const userId = user.uid;
    // console.log(userId)


    // ------------ Function to upload Image ------------
    const uploadImage = () =>{
        if( imageUpload == null ) return;
        // creating a reference for the image 
        // will need to tie this back to the user
        let imageRef = ref(storage, `${userId}/images/${imageUpload.name}`)

        // 
        uploadBytes(imageRef, imageUpload)
        .then(()=>{
            alert('Image Uploaded')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage)
        })

    };

    
  return (
    <>
        <div>ImageUpload</div>
        <input type='file' onChange={(event)=>{setImageUpload(event.target.files[0])}}/>
        <button onClick={uploadImage}>Upload Image</button>
    </>
  )
}

