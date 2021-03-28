import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import '../App.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Login = () => {

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    

    const login = () => {
        let newLogin = {
            email,
            password
        }

        console.log(newLogin);
    }

    const handleSubmit = () => {
        login()
    }
    return (
        <div className='login-page' >
            <h1 className='login-heading' >You need to login to continue</h1>
            <div className="login-form">
                <TextField variant='outlined' color='primary' label='Email' className='login-input' type='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <TextField variant='outlined' color='primary' label='Password' type='password' className='login-input' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <p style={{fontFamily:'monospace', margin:15}} >Not a member? <span> <Link to='/signup'  >Sign Up</Link> </span></p>
                <Button variant='contained' onClick={handleSubmit} color='primary' >Login</Button>
            </div>
        </div>
    )
}

export default Login
