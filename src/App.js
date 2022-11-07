import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import './index.css'


const App = () => {
  const[p, setP] = useState(0)
  const[t, setT] = useState(0)
  const[r, setR] = useState(0)
  const[si, setSi] = useState(0)


  const calculateInterest = () => {
    setSi(p*t*r/100)
  }

  return (

    <>
    <div className='div'>
     
     <AppBar position="static">
      
        <div className="int1">SIMPLE INTEREST</div>
         
      
     </AppBar>
     <br/> 
     
  </div>

  <div className="container">

  <TextField onChange={(event) => setP(event.target.value)} id="outlined-basic" label="Enter Principal" variant="outlined" />
     <br/>    <br/>
     <TextField onChange={(event) => setT(event.target.value)}id="outlined-basic" label="Enter Time" variant="outlined" />
     <br/>    <br/>
     <TextField onChange={(event) => setR(event.target.value)} id="outlined-basic" label="Enter Rate" variant="outlined"  />
     <br/>    <br/>
     <Button onClick={()=> calculateInterest()} variant="contained" size="large">Calculate</Button>
     <br/>    <br/>
     <Typography variant="h6" gutterBottom>
       YOUR RESULT : Rs.{si}
     </Typography>

  </div>
    
    </>
    
  );
}

export default App;
