import HeroSection from "@/components/HeroSection";
import { ImagesSliderDemo } from "@/components/ImageSlider";
import ProductFeatures from "@/components/ProductFeatures";
import TestomonialCard from "@/components/TestomonialCard";

export default function Home() {
  return (  
    
    <div className="dark">
        
        <HeroSection />
        <ImagesSliderDemo />
          {/* // here Image of the trucks means banner of the trucks transport */}
        <ProductFeatures />
        <TestomonialCard />
        
    </div>
  );
}
