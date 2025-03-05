import Hero from "@/components/passenger/home/Hero";
import Team from "@/components/passenger/home/Team";
import Testimonial from "@/components/passenger/home/Testimonial";
import Welcome from "@/components/passenger/home/Welcome";
import Why from "@/components/passenger/home/Why";

export default function Homepage() {
  return (
    <>
      <Hero/>
      <Welcome/>
      <Why/>
      <Team/>
      <Testimonial/>
    </>
  );
}
