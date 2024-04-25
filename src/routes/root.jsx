import { useEffect } from "react";
import AOS from 'aos';
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs/AboutUs";
import WhyUs from "../components/WhyUs/WhyUs";


export default function Root() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        {/* <div>Clients</div> */}
        <AboutUs />
        <WhyUs />
        <div>Skills</div>
        <div>Services</div>
        <div>Portfolio</div>
        <div>Team</div>
        <div>Pricing</div>
        <div>FAQ</div>
        <div>Contact</div>
        <div>Footer</div>
      </main>
    </>
  )
}
