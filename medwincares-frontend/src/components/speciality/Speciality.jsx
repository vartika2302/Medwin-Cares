import React from "react";
import './speciality.scss';

const Speciality = () => {
  return (
    <div className="speciality">
      <div className="speciality-wrapper">
        <h2 className="speciality-heading">Our Speciality</h2>
        <div className="speciality-list">
          <div className="speciality-item">
            <div className="sitem-top">
              <img
                src="http://localhost:3000/assets/images/laboratory.jpg"
                alt="laboratory"
              />
            </div>
            <div className="sitem-bottom">
              <span className="speciality-subheading">
                Pathology Laboratory
              </span>
              <div className="speciality-info">
                <span>(2021 reviews)</span>
                <button>More info</button>
              </div>
            </div>
          </div>
          <div className="speciality-item">
            <div className="sitem-top">
              <img
                src="http://localhost:3000/assets/images/gyna.jpg"
                alt="gynecology"
              />
            </div>
            <div className="sitem-bottom">
              <span className="speciality-subheading">
                Obstotrics & Gynecology
              </span>
              <div className="speciality-info">
                <span>(2021 reviews)</span>
                <button>More info</button>
              </div>
            </div>
          </div>
          <div className="speciality-item">
            <div className="sitem-top">
              <img
                src="http://localhost:3000/assets/images/heighest.jpg"
                alt="machines"
              />
            </div>
            <div className="sitem-bottom">
              <span className="speciality-subheading">Histopathology</span>
              <div className="speciality-info">
                <span>(2021 reviews)</span>
                <button>More info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
