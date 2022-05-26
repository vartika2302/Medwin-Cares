import React from "react";
import "./features.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="features-wrapper">
        <div className="feature-item">
          <div className="feature-image">
              <img src="https://cdn-icons-png.flaticon.com/128/4325/4325931.png" alt="ambulance"/>
          </div>
          <h3 className="feature-item-heading">Best Service</h3>
          <p className="feature-item-info">
            Provide excellant service and treatment for patients.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-image">
              <img src="https://cdn-icons-png.flaticon.com/128/822/822143.png" alt="medicines"/>
          </div>
          <h3 className="feature-item-heading">Affordable</h3>
          <p className="feature-item-info">
            Treatment recommendations to the customers through.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-image">
          <img src="https://cdn-icons-png.flaticon.com/128/3030/3030926.png" alt="lab tubes"/>
          </div>
          <h3 className="feature-item-heading">Top Facility</h3>
          <p className="feature-item-info">
            Adequate facilities to support our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
