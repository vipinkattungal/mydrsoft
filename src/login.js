import React , {useState}from 'react';
import axios from 'axios';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import displayImage from './loginImage.jpg'
import logo from './logo1.png'
import { useNavigate} from 'react-router-dom';
// import {Cookies} from 'js-cookie';
import {useCookies} from 'react-cookie'


const theme = createTheme();

export default function Login({setIsLoggedIn}) {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useCookies(['jwt']);

  const Navigate =useNavigate();
   
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const headers = {
          'Content-Type': 'application/json',
         // 'Authorization': 'Bearer your_token_here',
          // Add any other custom headers as needed
        };
        
        const response = await axios.post('https://clinic-cz9h.onrender.com/doctors/login', { email, password },{headers});
       console.log(response.data.userPayload)
      setCookie('jwt',response.data.token)
      setCookie('userPaylod',(JSON.stringify(response.data.userPayload)))
      // window.location.href = '/dashboard';
      } catch (error) {
        // Handle login error, display an error message, etc.
        console.log(error);
      }
    };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: `url(${displayImage})`,
            backgroundRepeat: 'no-repeat',
           
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            
          }}
        />
        <Grid item xs={12} sm={8} md={4} sx={{ backgroundColor: 'lightBlue'}} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <img src={logo} style   ={{height:'50px', width:'100px'}}/>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}

              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}