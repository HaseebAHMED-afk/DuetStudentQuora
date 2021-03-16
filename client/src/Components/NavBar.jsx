import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const NavBar = () => {
    return (
        <div className="navbar" >
            <div className="navsection">
                <img src="http://duet.edu.pk/wp-content/uploads/2016/04/duet_logo.png" alt="duet-logo"className='duet-logo' />
                <ul className='link-list' >
                    <li className='link-list-item' ><Link to='/' >Home</Link></li>
                    <li className='link-list-item' ><Link to='/askaquestion' >Ask A Question</Link></li>
                </ul>
                <div className="btn-section">
                    <Button className='btn' variant='contained' color='primary' ><Link to='/login' style={{color:'white'}} >Log In</Link></Button>
                    <Button className='btn' variant='outlined' color='primary' ><Link to='/signup' >Sign Up</Link></Button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
