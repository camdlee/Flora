import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { capitalize } from '../utils/formatter';



const defaultTheme = createTheme();

export default function EditProfileCard() {

  // ----------- Variables & hooks -------------
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState({})
  const navigate = useNavigate()


  

  return (
<>
        <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
                <div className="card">
                    <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: '#000', height: 200}}>
                        <div className="ms-4 mt-5 d-flex flex-column" style={{width: 150}}>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" style={{width: 150, zIndex: 1}} />
                                <Button onClick={handleEdit} className="btn btn-outline-dark" style={{zIndex: 1}}>
                                    Submit
                                </Button>
                        </div>
                        <div className="ms-3" style={{marginTop: 130}}>
                            <h5>{displayName}</h5>
                            {/* <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(event)=> {setFirstName(event.target.value)}}
                            /> */}
                            <p>New York</p>
                        </div>
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
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{backgroundColor: '#f8f9fa'}}>
                        <p className="font-italic mb-1">Web Developer</p>
                        <p className="font-italic mb-1">Lives in New York</p>
                        <p className="font-italic mb-0">Photographer</p>
                    </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Current Plants</p>
                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                    </div>
                    <div className="row g-2">
                    <div className="col mb-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" alt="image 1" className="w-100 rounded-3" />
                    </div>
                    <div className="col mb-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp" alt="image 1" className="w-100 rounded-3" />
                    </div>
                    </div>
                    <div className="row g-2">
                    <div className="col">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp" alt="image 1" className="w-100 rounded-3" />
                    </div>
                    <div className="col">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp" alt="image 1" className="w-100 rounded-3" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

    </>
  );
}