import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-top-left">
            <h2>Contact Us</h2>
          </div>
          <div className="footer-top-right">
            <div className="ftop-item">
              <div className="ftop-left">
                <div className="ftop-image">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4325/4325931.png"
                    alt="ambulance"
                  />
                </div>
              </div>
              <div className="ftop-right">
                <p>24 Hours Emergency</p>
                <h2>0-298-014</h2>
              </div>
            </div>
            <div className="ftop-item">
              <div className="ftop-left">
                <div className="ftop-image">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2371/2371329.png"
                    alt="medical kit"
                  />
                </div>
              </div>
              <div className="ftop-right">
                <p>Excellant Facilities</p>
                <h2>0-178-098</h2>
              </div>
            </div>
            <div className="ftop-item">
              <div className="ftop-left">
                <div className="ftop-image">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2785/2785693.png"
                    alt="emergency departments"
                  />
                </div>
              </div>
              <div className="ftop-right">
                <p>Fastest emergency departments</p>
                <h2>9871-985-983</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <img
              src="http://localhost:3000/assets/images/medwin-cares.png"
              alt="hospital-logo"
              className="footer-logo"
            />

            <p>
              Excellant service by prioritizing the safety and security of
              patients.
            </p>
            <div className="social-icons">
              <img
                src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
                alt="github icon"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                alt="linkedin icon"
              />
            </div>
          </div>
          <div className="footer-bottom-right">
            <Link to="/" className="link">
              <span>Home</span>
            </Link>
            <Link to="/" className="link">
              <span>About Us</span>
            </Link>
            <Link to="/" className="link">
              <span>Guidelines</span>
            </Link>
            <Link to="/" className="link">
              <span>Ask a Question</span>
            </Link>
            <Link to="/" className="link">
              <span>Register</span>
            </Link>
            <Link to="/" className="link">
              <span>Our Doctors</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
