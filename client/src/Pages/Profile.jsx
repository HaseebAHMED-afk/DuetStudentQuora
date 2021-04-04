import React , {useContext} from 'react'
import '../App.css'
import {Context} from '../GlobalState/Store'

const Profile = () => {

  const [state,dispatch] = useContext(Context);

    console.log(state);
    return (
      <div className="profile-page">
        <div className="personal">
          <h2>First Name:</h2>
          <h2>Last Name:</h2>
          <h2>Resistered Email:</h2>
          <h2>User Name:</h2>
        </div>
        <div className="info">
          <h2>Father Name:</h2>
          <h2>Gender:</h2>
          <h2>CNIC:</h2>
          <h2>Blood Group:</h2>
          <h2>Contact:</h2>
        </div>
        <div className="uni-info">
          <h2>Designation:</h2>
          <h2>Department:</h2>
          <h2>Batch:</h2>
          <h2>Roll No:</h2>
          <h2>Enrolement:</h2>
        </div>
      </div>
    );
}

export default Profile
