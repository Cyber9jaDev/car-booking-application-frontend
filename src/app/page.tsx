import Footer from "@/components/passenger/home/Footer";
import Hero from "@/components/passenger/home/Hero";
import Testimonial from "@/components/passenger/home/Testimonial";
import Welcome from "@/components/passenger/home/Welcome";
import Why from "@/components/passenger/home/Why";
import Drivers from "@/components/passenger/home/Drivers";
import Navbar from "@/components/passenger/home/Navbar";

export default function Homepage() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Why/>
      <Drivers/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
