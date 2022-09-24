import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Button, Menu, MenuItem } from "@mui/material";
import { UserContext } from "../App";
import { AccountCircle } from "@mui/icons-material";

import MyPoster from "../asset/about1.png";
import { yellow } from "@mui/material/colors";

const AboutUs = () => {
  //pull user detials from backend
  const userContext = useContext(UserContext);

  //Logout arrow
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async (event) => {
    event.preventDefault();

    await fetch("/api/logout", {
      method: "DELETE",
    });
    window.location.href = "/";
  };

  return (
    <>
      <div style={{ width: "61.3%", marginLeft: "18.8%" }}>
        <Link
          sx={{ color: "inherit", textDecoration: "none" }}
          component={RouterLink}
          to={`/`}
          className="a"
        >
          {" "}
          <h1 className="web-title">PGGER</h1>
        </Link>
        <div style={{ float: "right", paddingTop: "27px", minWidth: "0px" }}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ minWidth: "0px", color: "#1c1c1c" }}
          >
            ▼
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={handleLogout}
              style={{
                fontFamily: "Poppins",
                fontWeight: "500",
                backgroundColor: "#F2FAFF",
              }}
            >
              Log Out
            </MenuItem>
          </Menu>
        </div>
        <h1
          style={{
            color: "#1c1c1c",
            fontFamily: "Poppins",
            paddingTop: "15px",
            fontSize: "21px",
            fontWeight: "100",
            float: "right",
          }}
        >
          {userContext.name}
        </h1>
        <AccountCircle
          sx={{
            fontSize: "60px",
            color: "#1c1c1c",
            float: "right",
            marginLeft: "0px",
            paddingTop: "29px",
            width: "0.65em",
            height: "1em",
          }}
        />
      </div>
      <hr
        style={{
          width: "99%",
          marginBottom: "20px",
          backgroundColor: "grey",
          height: "0.3px",
          marginLeft: "7px",
          opacity: "0.3",
        }}
      />
      <img
        src={MyPoster}
        alt=""
        style={{ width: "60%", float: "right", marginTop: "7em" }}
      />
      <div style={{ width: "50%", marginLeft: "8%", marginTop: "13.5%" }}>
        <h1
          style={{
            color: "#3ab757",
            fontFamily: "Montserrat",
            fontWeight: "300",
          }}
        >
          ABOUT US
        </h1>
        <h4
          style={{
            color: "#585858",
            fontFamily: "Poppins",
            lineHeight: "25px",
          }}
        >
          Our Website mainly aims to connect users to the local Paid Guest(PG)
          in Silchar. We provide a simple user friendly way to register to any
          PG in Silchar. A user can easily view the PG's photos,reviews and
          register to any PG to his/her liking.
          <br />
          We also have a review system for each of the PG. A user can read the
          reviews and decide which PG will be more preferable to them.
        </h4>
        <Button
          sx={{
            marginTop: "3%",
            textTransform: "none",
            fontSize: "20px",
            fontFamily: "Poppins",
            width: "11em",
            height: "3.5em",
            background: "#3ab757",
            color: "white",
            fontWeight: "600",
            "&:hover": {
              background: "#74f2ce",
              color: "white",
            },
          }}
        >
          Learn More
        </Button>
      </div>
    </>
  );
};

export default AboutUs;
