import React, { useState, useEffect } from "react";
import logo from "./logo.ico";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiVideoAddLine } from "react-icons/ri/index.esm.js";
import { IoMdNotificationsOutline } from "react-icons/io/index.esm.js";
import { BiUserCircle } from "react-icons/bi/index.esm.js";
import SearchBar from "./SearchBar/SearchBar.js";
import Auth from "../../Pages/Auth/Auth.js";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { login } from "../../action/auth.js";
import { jwtDecode } from "jwt-decode";
import { setcurrentuser } from "../../action/currentuser.js";

const Navbar = ({ toggledrawer, seteditcreatechanelbtn }) => {
  const [authbtn, setAuthbtn] = useState(false);
  const [user, setuser] = useState([]);
  const [profile, setprofile] = useState([]);
  const dispatch = useDispatch();
  const currentuser = useSelector((state) => state.currentuserreducer);

  const google_login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setuser(tokenResponse);
      console.log("Access Token:", tokenResponse.access_token);
    },
    onError: (error) => console.log("Login Failed", error),
  });

  useEffect(() => {
    if (user) {
      const accessToken = user.access_token;

      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setprofile(res.data);
          successlogin();
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const successlogin = () => {
    if (profile.email) {
      console.log(profile.email);
      dispatch(login({ email: profile.email }));
    }
  };

  const logout = () => {
    dispatch(setcurrentuser(null));
    googleLogout();
    localStorage.clear();
  };

  useEffect(() => {
    const token = currentuser?.token;
    if (token) {
      const decodetoken = jwtDecode(token);
      if (decodetoken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))));
  }, [currentuser?.token, dispatch]);

  return (
    <>
      <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
          <div className="burger" onClick={toggledrawer}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to="/" className="logo_div_Navbar">
            <img src={logo} alt="Logo" />
            <p className="logo_title_navbar">Yor-Tube</p>
          </Link>
        </div>

        <SearchBar />

        <RiVideoAddLine size={22} className="vid_bell_Navbar" />
        <div className="apps_Box">
          {/* Placeholder for app icons */}
          {[...Array(8)].map((_, index) => (
            <p key={index} className="appBox"></p>
          ))}
        </div>

        <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />

        <div className="Auth_cont_Navbar">
          {currentuser?.result ? (
            <div className="profile-container" onClick={() => setAuthbtn(true)}>
              <p className="fstChar_logo_App">
                {currentuser.result.name
                  ? currentuser.result.name.charAt(0).toUpperCase()
                  : currentuser.result.email.charAt(0).toUpperCase()}
              </p>
              <span className="user-name">
                {currentuser.result.name || currentuser.result.email}
              </span>
            </div>
          ) : (
            <p className="Auth_Btn" onClick={google_login}>
              <BiUserCircle size={22} />
              <b>Sign in</b>
            </p>
          )}
        </div>
      </div>
      {authbtn && (
        <Auth
          seteditcreatechanelbtn={seteditcreatechanelbtn}
          setAuthbtn={setAuthbtn}
          user={currentuser}
        />
      )}
    </>
  );
};

export default Navbar;
