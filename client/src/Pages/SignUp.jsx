import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const SignUp = () => {

    const navigate = useNavigate();
    return (
        <div className='signup-page' >
            <h1 className='signup-heading' >Sign Up</h1>
            <div className="signup-form">
            <TextField label='Email' name='email' variant='outlined' color='primary' className='signup-input' />
            <TextField label='Password' name='password' variant='outlined' color='primary' className='signup-input' />
            <Button onClick={() => {navigate('/buildprofile')}} variant='contained' color='primary' >Sign Up</Button>
            </div>
        </div>
    )
}

export default SignUp
