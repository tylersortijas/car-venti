import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AffordCars from "../components/AffordCars";
import GreatValue from "../components/GreatValue";
import Selling from "../components/Selling";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AffordCars />
      <GreatValue />
      <Selling />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default Home;
