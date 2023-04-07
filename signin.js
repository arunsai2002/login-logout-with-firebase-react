import React, { useState } from 'react'

import {auth} from './config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'; //createUserWithEmailAndPassword is a firebase keyword which takes form attributes and connects with firebase file in our directory.

const Post1 = () => {
    
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    console.log(auth.currentUser.email);

    const submit = async ()=>{
        createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        console.log(userCredential)
      }).catch((error)=>{
        console.log(error);
      })
    }
   
  return (
   <>
   <div class="container-fluid">
   <form onSubmit={submit}>
  <div class="form-group">
    
    <input type="email" placeholder="Enter email" name="email" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
   
  </div>
  <div class="form-group">
    
    <input type="password" placeholder="Password" name='password' id='password' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
    
  </div>
  
  <button type="submit" class="btn btn-primary">signup</button>
</form>
   </div>
   </>
  )
}

export default Post1;
