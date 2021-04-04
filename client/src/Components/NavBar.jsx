import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Context } from "../GlobalState/Store";
import { Typography } from "@material-ui/core";

const NavBar = () => {
  const [state, dispatch] = useContext(Context);

  console.log(state);

  return (
    <div className="navbar">
      <div className="navsection">
        <img
          src="http://duet.edu.pk/wp-content/uploads/2016/04/duet_logo.png"
          alt="duet-logo"
          className="duet-logo"
        />
        <ul className="link-list">
          <li className="link-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="link-list-item">
            <Link to="/askaquestion">Ask A Question</Link>
          </li>
        </ul>

        {state.loggedIn === true ? (
          <div className="btn-section">
            <Button className="btn" variant="contained" color="primary">
              Log Out
            </Button>
            <Typography style={{ display: "flex" }} variant="h6">
              {state.currentUser}
            </Typography>
          </div>
        ) : (
          <div className="btn-section">
            {" "}
            <Button className="btn" variant="contained" color="primary">
              <Link to="/login" style={{ color: "white" }}>
                Log In
              </Link>
            </Button>
            <Button className="btn" variant="outlined" color="primary">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
