import React from 'react'
import TextField from '@material-ui/core/TextField'
import '../App.css'
import { Button } from '@material-ui/core'

const Login = () => {
    return (
        <div className='login-page' >
            <h1 className='login-heading' >You needto login to continue</h1>
            <div className="login-form">
                <TextField variant='outlined' color='primary' label='Email' className='login-input' />
                <TextField variant='outlined' color='primary' label='Password' className='login-input' />
                <Button variant='contained' color='primary' >Login</Button>
            </div>
        </div>
    )
}

export default Login
