import React from "react";
import { useState } from 'react';
import Image from 'react-bootstrap/Image';

import Alert from 'react-bootstrap/Alert';
function AboutUS(){
   
  
    return (
     <div  style={{padding:20,backgroundColor:'rgb(248,248,248)'}}>  
     <Alert  key={'secondary'} variant={'light'}>
     <h1>About us</h1>
    <div style={{display:"flex"}}>
        <div style={{width:50+'%'}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in distinctio iste vel, quis labore tempora minus ullam dicta amet aperiam deleniti at provident vero sed facilis? Est, tempore distinctio.
     
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in distinctio iste vel, quis labore tempora minus ullam dicta amet aperiam deleniti at provident vero sed facilis? Est, tempore distinctio.
     
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in distinctio iste vel, quis labore tempora minus ullam dicta amet aperiam deleniti at provident vero sed facilis? Est, tempore distinctio.
     </p>
   
        </div>
        <div style={{justifyContent:'center'}}>
<Image style={{display:'block',justifyContent:'center',marginTop:40+"px",marginLeft:50+'px'}} width={300} src="https://images.pexels.com/photos/374831/pexels-photo-374831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" rounded />

        </div>
    </div>
        </Alert>
     
     </div> 
    );
  }

export default AboutUS