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
                    src="https://cdn-icons.flaticon.com/png/512/2263/premium/2263265.png?token=exp=1653258115~hmac=122f4a1d77180df7e08131e5d1a638af"
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
                    src="https://cdn-icons.flaticon.com/png/128/4048/premium/4048810.png?token=exp=1653258358~hmac=9c7e322b9b3a9a37e999f41439dd592d"
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
                src="https://cdn-icons.flaticon.com/png/512/3488/premium/3488426.png?token=exp=1653301583~hmac=42d6b5fe968ad31e379eb21f4872069c"
                alt="github icon"
              />
              <img
                src="https://cdn-icons.flaticon.com/png/512/3488/premium/3488326.png?token=exp=1653257678~hmac=160ac701d770097abc3e08ac2c11f765"
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
