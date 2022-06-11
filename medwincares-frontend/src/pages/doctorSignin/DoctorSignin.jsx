import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./doctorSignin.scss";
import { useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const DoctorSignin = () => {
  // no need to use onChange
  const doctorEmailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/doctor/login", {
        email: doctorEmailRef.current.value,
        password: passwordRef.current.value,
      });
      // console.log(res.data);
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="doctor-signin">
      <Link to="/" className="link">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7618/7618370.png"
          alt="back btn"
          className="back-btn"
        />
      </Link>
      <div className="doctor-signin-wrapper">
        <img
          src="http://localhost:3000/assets/images/medwin-cares.png"
          alt="hospital-logo"
          className="doctor-signup-image"
        />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            ref={doctorEmailRef}
          />
          <input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          <button type="submit" disabled={isFetching}>
            LOGIN
          </button>
        </form>
        <p className="register-info">
          Are you new here?
          <Link to="/doctor/register">
            <span> Register</span>
          </Link>
        </p>
        {error && (
          <p className="errorMsg">Something went wrong! Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorSignin;
