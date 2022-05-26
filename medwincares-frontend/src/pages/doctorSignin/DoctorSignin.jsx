import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./doctorSignin.scss";
import { useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const DoctorSignin = () => {
  // no need to use onChange
  const doctorEmailRef = useRef();
  const passwordRef = useRef();
  const { doctor, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/doctor/login", {
        email: doctorEmailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(doctor);

  return (
    <div className="doctor-signin">
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
          <button type="submit">LOGIN</button>
        </form>
        <p className="register-info">
          Are you new here?
          <Link to="/doctor/register">
            <span> Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DoctorSignin;