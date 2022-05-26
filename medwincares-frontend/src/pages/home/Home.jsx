import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Features from "../../components/features/Features";
import Speciality from "../../components/speciality/Speciality";
import Vaccination from "../../components/vaccination/Vaccination";
import FeaturesDesc from "../../components/featuresDesc/FeaturesDesc";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Features />
      <Speciality/>
      <Vaccination/>
      <FeaturesDesc/>
      <Footer/>
    </div>
  );
};

export default Home;
