import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Snackbar } from '@mui/material';
import { updateProfile } from 'firebase/auth';


const defaultTheme = createTheme({
  palette: {
      primary: {
        main: '#79d9af',
        contrastText: "#fff"
    }
  }
});


export default function AddPlantForm() {

    const [plantNickname, setPlantNickname] = useState('');
    const [plantSpecies, setPlantSpecies] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const navigate = useNavigate()
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
    //   const data = new FormData(event.currentTarget);
    //   console.log(data)
        console.log(plantNickname + ' ' + plantSpecies+ ' ' +imageUpload)
  
    };
  
  
    
  
    return (
      <body className='signup-page'>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className='authentication-container'>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
              {/* <LockOutlinedIcon /> */}
            {/* </Avatar> */}
            <Typography component="h1" variant="h5">
              Add Your Plant
            </Typography>
            <Box 
                component="form" 
                onSubmit={handleSubmit} 
                noValidate 
                sx={{ 
                    mt: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
            >
              <Avatar />
              <input type='file' onChange={(event)=>{setImageUpload(event.target.files[0])}}/>
              <TextField
                margin="normal"
                required
                fullWidth
                id="plantNickName"
                label="Give your plant a nickname"
                name="plantNickName"
                autoComplete="plantNickName"
                autoFocus
                onChange={(event)=> {setPlantNickname(event.target.value)}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="plant-species"
                label="Species"
                type="plant-species"
                id="plant-species"
                autoComplete="current-password"
                onChange={(event)=> {setPlantSpecies(event.target.value)}}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      </body>
    );
}
