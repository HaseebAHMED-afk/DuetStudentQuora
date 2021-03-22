import React from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Tooltip,
  IconButton,
} from "@material-ui/core";

const BuildProfile = () => {
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
        />
        <TextField
          label="Last Name"
          name="lastName"
          variant="outlined"
          color="primary"
          className="profile-input-line"
        />
        <TextField
          label="Father Name"
          name="fatherName"
          variant="outlined"
          color="primary"
          className="profile-input-noline"
        />
        <TextField
          label="Gender"
          name="gender"
          variant="outlined"
          color="primary"
          className="profile-input-noline"
        />
        <TextField
          label="CNIC"
          name="cnic"
          variant="outlined"
          color="primary"
          className="profile-input-line"
        />
        <TextField
          label="Blood Group"
          name="bloodGrp"
          variant="outlined"
          color="primary"
          className="profile-input-line"
        />
        <TextField
          label="Roll Number"
          name="roll-no"
          variant="outlined"
          color="primary"
          className="profile-input-noline"
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
        />
        <TextField
          label="Contact No."
          name="contact"
          variant="outlined"
          color="primary"
          className="profile-input-line"
        />
        <input
          accept="image/jpeg"
          id="faceImage"
          type="file"
        />
        <Tooltip title="Select Image">
          <label htmlFor="faceImage">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera fontSize="large" />
            </IconButton>
          </label>
        </Tooltip>
        <Button  color="primary">
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ display: "block", margin: 15 }}
        >
          Build My Profile
        </Button>
      </div>
    </div>
  );
};

export default BuildProfile;
