import { useEffect } from "react";
import AOS from 'aos';
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";


export default function Root() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <div>Clients</div>
        <div>About Us</div>
        <div>Why us</div>
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
