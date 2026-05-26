
import HeroSection from "../../components/home/HeroSection";
import ProblemSection from "../../components/home/ProblemSection"
import SolutionSection from "../../components/home/SolutionSection";
import CTASection from "../../components/home/CTASection";
import FeatureCards from "../../components/home/FeatureCards";
import About from "../../components/home/About";
// import AboutSection from "../../components/home/AboutSection"



function Home() {

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-20 py-8 sm:py-10 relative overflow-hidden bg-black" >

      <HeroSection/>
      <ProblemSection/>
      <SolutionSection/>
      {/* <AboutSection/> */}
      <About/>
      <FeatureCards/>
      <CTASection/>

     
    </div>
  );
}


export default Home;