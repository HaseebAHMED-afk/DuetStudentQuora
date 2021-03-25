import React, {useState} from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@material-ui/core";

const BuildProfile = () => {

  let [firstName , setFirstName] = useState('')
  let [lastName , setLastName] = useState('')
  let [fatherName , setFatherName] = useState('')
  let [gender, setGender] = useState('')
  let [cnic , setCnic] = useState('')
  let [bloodGroup , setBloodGroup] = useState('')
  let [rollNo , setRollNo] = useState('')
  let [designation , setDesignation] = useState('')
  let [department , setDepartment] = useState('')
  let [batch , setBatch] = useState('')
  let [enrolement , setEnrolement] = useState('')
  let [contact , setContact] = useState('')


  const handleClick = () => {
    buildProfile();
  }

  const buildProfile = () => {
    let newProfile = {
      firstName,
      lastName,
      fatherName,
      gender,
      cnic,
      bloodGroup,
      rollNo,
      designation,
      department,
      batch,
      enrolement,
      contact
    }

    console.log(newProfile);
  }

  return (
    <div className="buildprofile-page">
      <h1 className="buildprofile-heading">
        Now, it's time to build a catchy profile.
      </h1>
      
      <div className="buildprofile">
      
        
        <TextField
          label="First Name"
          name="firstName"
          variant="outlined"
          color="primary"
          className="profile-input-line"
          value={firstName}
          onChange={(e) => {setFirstName(e.target.value)}}
        />
        <TextField
          label="Last Name"
          name="lastName"
          variant="outlined"
          color="primary"
          className="profile-input-line"
          value={lastName}
          onChange={(e) => {setLastName(e.target.value)}}
        />
        <TextField
          label="Father Name"
          name="fatherName"
          variant="outlined"
          color="primary"
          className="profile-input-noline"
          value={fatherName}
          onChange={(e) => {setFatherName(e.target.value)}}
        />
        <FormControl variant="outlined" className="profile-input-noline">
          <InputLabel id="demo-simple-select-outlined-label">
            Gender
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Gender"
            className="designation-select"
            fullWidth={true}
            value={gender}
            onChange={(e) => {setGender(e.target.value)}}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="CNIC"
          name="cnic"
          variant="outlined"
          color="primary"
          className="profile-input-line"
          value={cnic}
          onChange={(e) => {setCnic(e.target.value)}}
        />
        <TextField
          label="Blood Group"
          name="bloodGrp"
          variant="outlined"
          color="primary"
          className="profile-input-line"
          value={bloodGroup}
          onChange={(e) => {setBloodGroup(e.target.value)}}
        />
        <TextField
          label="Roll Number"
          name="roll-no"
          variant="outlined"
          color="primary"
          className="profile-input-noline"
          value={rollNo}
          onChange={(e) => {setRollNo(e.target.value)}}
        />
        <FormControl variant="outlined" className="profile-input-noline">
          <InputLabel id="demo-simple-select-outlined-label">
            Designation
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Designation"
            className="designation-select"
            fullWidth={true}
            value={designation}
            onChange={(e) => {setDesignation(e.target.value)}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Student"}>Student</MenuItem>
            <MenuItem value={"Teacher"}>Faculty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className="profile-input-noline">
          <InputLabel id="demo-simple-select-outlined-label">
            Department
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Department"
            className="designation-select"
            fullWidth={true}
            value={department}
            onChange={(e) => {setDepartment(e.target.value)}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Department Of Computer System Engineering"}>
              Department Of Computer System Engineering
            </MenuItem>
            <MenuItem value={"Department Of Telecommunication Engineering"}>
              Department Of Telecommunication Engineering
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Batch"
          name="batch"
          variant="outlined"
          color="primary"
          className="profile-input-line"
          value={batch}
          onChange={(e) => {setBatch(e.target.value)}}
        />
         <TextField
          label="Enrolement No."
          name="enrolement"
          variant="outlined"
          color="primary"
          className="profile-input-line"
          value={enrolement}
          onChange={(e) => {setEnrolement(e.target.value)}}
        />
        <TextField
          label="Contact No."
          name="contact"
          variant="outlined"
          color="primary"
          className="profile-input-line"
          value={contact}
          onChange={(e) => {setContact(e.target.value)}}
        />
      

        <Button
          variant="contained"
          color="primary"
          style={{ display: "block", margin: 15 }}
          onClick={handleClick}
        >
          Build My Profile
        </Button>
      </div>
    </div>
  );
};

export default BuildProfile;
