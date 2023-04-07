import React, { useState } from 'react'

import {auth} from './config/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

const Post = () => {
    
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    console.log(auth.currentUser.email);

    const submit = async ()=>{
      signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
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
  
  <button type="submit" class="btn btn-primary">signin</button>
</form>
   </div>
   </>
  )
}

export default Post;
