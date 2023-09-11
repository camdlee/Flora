import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { auth, storage, updatePassword, } from '../firebase';
import { upload, useAuth } from '../utils/customHooks';
import { getDownloadURL, ref } from "firebase/storage";
import { updateProfile } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDocs } from 'firebase/firestore';
import pothos from '../static/images/pothos.jpg';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';


export default function ProfileCard() {
    
    // ------------- States ------------------
    const [authUser, setAuthUser] = useState()
    const [ edit, setEdit ] = useState(false)
    const [email, setEmail] = useState('')
    const [imageUpload, setImageUpload] = useState(null);
    // const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('');
    const [profilePic, setProfilePic] = useState();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    // const storage = getStorage();
    // const profilePic = ref(storage, '');
    // const [lastName, setLastName] = useState('')
    // const navigate = useNavigate()


    //----------- Getting Data for User --------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                setEmail(user.email)
                setFirstName(user.displayName)
                
            } else {
              setAuthUser(null)
            }  
    }, [authUser])
    })

    const currentUser = useAuth();

    // useEffect(()=>{
    //     let isMounted = true;

    //     const fetchUserData = async () => {
    //         const querySnapshot = await getDocs(collection())
    //         if(currentUser){
    //             try{
    //                 //Fetch current user data asynchronously
    //                 const userSnapshot = await getUserData(currentUser.uid)
    //             } catch(error){
    //                 console.error("Error fetching user data", error);
    //             }
    //         }
    //     }
    //     // if(currentUser){
    //     //     setProfilePic(currentUser.photoUrl);
    //     //     setEmail(currentUser.email)
    //     //     setFirstName(currentUser.displayName)
    //     //     // console.log(authUser.uid)
    //     // }

    //     const getUserData = async (uid) =>{
    //         const userDoc = firestore.collection('users').doc(uid);
    //         const userSnapshot = await userDoc.get();
    //         return userSnapshot
    //     }

    //     fetchUserData();
    // }, [currentUser])


    //---------- Edit Button function -------------
    const handleEdit = (event) => {
        // console.log('Clicked')

        if(edit === false){
            // console.log('Clicked')
            setEdit(true)
            // setEdit(event.target.value)
        } else{
            // console.log('Clicked Again')
            setEdit(false)
        }
    }

    //-------- Function to update Email ------------
    const updateUserEmail = (event) =>{
        // updateEmail(auth.authUser, event.target.value)
        // .then(() => {
        //     // Email updated!
        //     // ...
        //   })
        // .catch((error) => {
        //     // An error occurred
        //     // ...
        //   });
    }


    //------------- Updating User Profile -------------------
    // updateProfile(auth.authUser, {
    //     displayName: 'Cameron',
    //     photoURL: '',
    // }).then(() => {
    //     // Profile Updated
    // }).catch((error) => {
    //     // An error occurred
    // });

    // ----- Profile Picture File Reference ----------
    // const userId = ''
    // const fileRef = ref(storage, `${userId}/profile-picture/`);    
    

    // const handleChange = (event) =>{
    //     if(event.target.files[0]){
    //         setPhoto(event.target.files[0])
    //         console.log(photo)
    //     }
    // }

    // const handleClick = () =>{
    //     upload(photo, authUser, fileRef, setLoading);

    //     const profilePicUrl = getDownloadURL(fileRef);
    //     updateProfile(authUser, {profilePicUrl})
    // }


  return (
    <>
        {/* <div className='home-container'>
            <input type='file' onChange={handleChange}/>
            <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
            <Avatar src={profilePic} sx={{ m: 1, }}></Avatar>
        </div> */}

        <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
                <div className="card">
                    <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: '#000', height: 200}}>
                        <div className="ms-4 mt-5 d-flex flex-column" style={{width: 150}}>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" style={{width: 150, zIndex: 1}} />
                            { edit? 
                            <>
                                <Button onClick={handleEdit} className="btn btn-outline-dark" style={{zIndex: 1}}>
                                    Submit
                                </Button>
                            </>
                            :
                            <>
                                <Button onClick={handleEdit} className="btn btn-outline-dark" style={{zIndex: 1}}>
                                    Edit profile
                                </Button>
                            </>
                            }
                        </div>
                        {/* <div className="ms-3" style={{marginTop: 130}}>
                            { edit? 
                            <>
                            </>
                            :
                            <>
                                <h5>{firstName}</h5>
                            </>
                            }
                            <p>New York</p>
                        </div> */}
                    </div>
                <div className="p-4 text-black" style={{backgroundColor: '#f8f9fa'}}>
                    <div className="d-flex justify-content-end text-center py-1">
                    <div>
                        <p className="mb-1 h5">253</p>
                        <p className="small text-muted mb-0">Photos</p>
                    </div>
                    <div className="px-3">
                        <p className="mb-1 h5">1026</p>
                        <p className="small text-muted mb-0">Followers</p>
                    </div>
                    <div>
                        <p className="mb-1 h5">478</p>
                        <p className="small text-muted mb-0">Following</p>
                    </div>
                    </div>
                </div>
                <div className="card-body p-4 text-black">
                    <div className="mb-5">

                    <div className="p-4" style={{backgroundColor: '#f8f9fa'}}>
                        { edit? 
                            <>
                                <p className="mb-1">Name: <input></input> </p>
                                <p className="mb-1">Email: <input></input> </p>
                            </>
                            :
                            <>
                                <p className="mb-1">Name: <>{firstName}</> </p>
                                <p className="mb-1">Email: <>{email}</> </p>
                            </>
                        }
                    </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Current Plants</p>
                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                    </div>
                    <div className="row g-2">
                    <div className="col mb-2">
                        <img src={pothos} alt="image 1" className="w-100 rounded-3" />
                    </div>
                    <div className="col mb-2">
                        <img src={pothos} alt="image 1" className="w-100 rounded-3" />
                    </div>
                    </div>
                    <div className="row g-2">
                    <div className="col">
                        <img src={pothos} alt="image 1" className="w-100 rounded-3" />
                    </div>
                    <div className="col">
                        <img src={pothos} alt="image 1" className="w-100 rounded-3" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

    </>
  )
}
