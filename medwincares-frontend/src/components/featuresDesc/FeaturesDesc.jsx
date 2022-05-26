import React from "react";
import "./featuresDesc.scss";

const FeaturesDesc = () => {
  return (
    <div className="features-desc">
      <div className="features-desc-wrapper">
        <div className="fdesc-item1">
          <div className="fimagecontainer">
            <div className="fcolor">
              <img
                src="http://localhost:3000/assets/images/best-services.jpg"
                alt="best services"
                className="fimage1"
              />
            </div>
          </div>
          <div className="fcontent1">
            <h3 className="fcontent-head1">Provide the best service.</h3>
            <p className="fcontent-info1">
              We offer a full range of specialist services which includes one of
              the largest hospitals in the UK with one of London's busiest
              emergency departments.
            </p>
          </div>
        </div>
        <div className="fdesc-item2">
          <div className="fimagecontainer">
            <div className="fcolor">
              <img
                src="http://localhost:3000/assets/images/depart.jpg"
                alt="depart services"
                className="fimage2"
              />
            </div>
          </div>
          <div className="fcontent2">
            <h3 className="fcontent-head2">Fastest emergency departments.</h3>
            <p className="fcontent-info2">
              We offer a full range of specialist services which includes one of
              the largest hospitals in the UK with one of London's busiest
              emergency departments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDesc;
