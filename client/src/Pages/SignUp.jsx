import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const SignUp = () => {

    const navigate = useNavigate();

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    const handleSignUp = () => {
    navigate('/buildprofile')
        signUp();
    }

    const signUp = ()=>{
        let newSignUp = {
            email,
            password
        }

        console.log(newSignUp);
    }

    return (
        <div className='signup-page' >
            <h1 className='signup-heading' >Sign Up</h1>
            <div className="signup-form">
            <TextField label='Email' type='Email'  name='email' variant='outlined' color='primary' className='signup-input' onChange={(e)=>{setEmail(e.target.value)}} />
            <TextField label='Password' type='password' name='password' variant='outlined' color='primary' className='signup-input' onChange={(e)=>{setPassword(e.target.value)}} />
            <Button onClick={handleSignUp} variant='contained' color='primary' >Sign Up</Button>
            </div>
        </div>
    )
}

export default SignUp
