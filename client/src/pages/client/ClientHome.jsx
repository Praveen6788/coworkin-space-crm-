

// import MembershipBanner from "../components/home/MembershipBanner";

import HeroSection from "../../components/clients/Hero"
import Howitworks from "../../components/clients/Howitworks";
import FeaturedSpace  from "../../components/clients/WorkspaceOptions";
import Locations from "../../components/clients/Locations";
import Amenities from "../../components/clients/Amenities";
import AIChatbot from "../../components/shared/AIChatbot";


function HomePage() {

  return (

    <div>

     <HeroSection/>
     <Howitworks/>
      <Locations/>
      <FeaturedSpace />
      <Amenities/>
      <AIChatbot />
     
    </div>

  );
}

export default HomePage;
