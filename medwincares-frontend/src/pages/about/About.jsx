import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./about.scss";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="about-wrapper">
          <div className="about-top">
            <h1>
              Your reason to <span>Smile</span>.
            </h1>
            <p>
              Medwin Cares is a professional hospital that includes General,
              Cosmetic, Aesthetic and Emergency services & facilities for you
              and your family with a team of professional doctors at friendly
              prices.
            </p>
          </div>
          <div className="about-bottom">
            <h1>
              Why <span>Medwin Cares</span>?
            </h1>
            <p>
              Handled directly by general doctors and professional and
              experienced specialists. As well as cooperating with various
              insurances for the convenience of patients.
            </p>
            <ul>
              <li>
                Professional care of the highest standards in a Comfortable and
                Relaxed environment.
              </li>
              <li>
                Provides on-site healthcare services to schools, corporate and
                senior home.
              </li>
              <li>
                We utilize up-to-date clinical technologies to help you achieve
                a smile.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
