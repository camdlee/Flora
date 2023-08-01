//=========================== IMPORTS =======================
import { useState, useEffect } from "react";
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Button from 'mui/material/Button';
import { useNavigate } from "react-router-dom";


// ========================== FUNCTION ========================
export default function AuthState() {
    
    const [authUser, setAuthUser] = useState('')
    const navigate = useNavigate()


}