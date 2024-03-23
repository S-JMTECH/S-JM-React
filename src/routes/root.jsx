import { useEffect } from "react";
import AOS from 'aos';


export default function Root() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div>Header</div>
      <div>Hero</div>
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
    </>
  )
}
