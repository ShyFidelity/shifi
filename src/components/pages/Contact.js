
import contact from "../images/phoneafriendsmall.png";
import '../../styles/About.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import '../../styles/Contact.css'


const subjects = [
  {
    value: 'Work',
    label: 'Work',
  },
  {
    value: 'Collaborate',
    label: 'Collaborate',
  },
  {
    value: '<3',
    label: '<3',
  },
  {
    value: 'question',
    label: 'question',
  },

];
export default function Contact() {

  const [subject, setSubject] = React.useState('EUR');

  const handleChange = (event) => {
    setSubject(event.target.value);
  };


  return (
    <div className="page">
      <h1>Contact Page</h1>
      
      <Box
        
        component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
  
          <div className="contactForm">
          <img className="phone" src={contact}  width="150" height= "260" alt="hand holding phone"/>
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Name"
              variant="filled"
            />

<TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="email"
              variant="filled"
            />
            <TextField
          id="filled-select-currency"
          select
          label="Select"
          value={subjects}
          onChange={handleChange}
          helperText="Subject"
          variant="filled"
        >
          {subjects.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-multiline-static"
          label="Tell me..."
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
       </div>
           
        </Box>
          {" "}
          <a
            href="tel:3039013230"
            onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
          >
            <p class="call-button">303-901-3230</p>
          </a>
       
          <a href="mailto:shyfidelity100@gmail.com">shyfidelity100@gmail.com</a>
   
   
    

    </div>
  );
}
