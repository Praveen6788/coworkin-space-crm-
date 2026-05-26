import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import ColorBends from "../../../reactbits/ColorBends"
import GlassButton from "../ui/Glassbutton"
import BlurText from "../../../reactbits/BlurTexts"
const HeroSection = () => {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section className="relative w-screen min-h-screen/2 overflow-hidden left-1/2 right-1/2 -translate-x-1/2 ">

      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={90}
          speed={0.4}
          scale={0.8}
          frequency={0.8}
          warpStrength={1}
          mouseInfluence={0}
          noise={0.15}
          parallax={0.3}
          iterations={1}
          intensity={1}
          bandWidth={3}
          transparent
          autoRotate={0}
          color="#A855F7"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto min-h-screen flex items-center justify-center px-6">

        <div className="w-full flex flex-col items-center text-center text-white">

          <div className="inline-flex items-center justify-center gap-2 glass-card px-4 py-2 mb-6 text-xl sm:text-base ">
            <span className="w-2 h-2 rounded-full bg-green-400 "></span>
            Multi-Center Coworking CRM + ERP Platform
          </div>

          <h1 className="w-full text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">

            <BlurText
              text="Unified Operating System for Coworking Spaces"
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="inline-block"
            />

          </h1>
          <p className="w-full max-w-3xl text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            Reduce revenue leakage, automate renewals,
            manage occupancy, and streamline coworking
            operations across multiple branches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <GlassButton
              to="/login"
              size="md"
              glass

            >
              Explore Demo
            </GlassButton>


          </div>

        </div>

      </div>

    </section>
  )
}

export default HeroSection