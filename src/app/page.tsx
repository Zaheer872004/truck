import { CarousalProduct } from "@/components/CarousalProduct";
// import HeroSection from "@/components/HeroSection";
import { ImagesSliderDemo } from "@/components/ImageSlider";
import { BentoGridDemo } from "@/components/ProductCard";
import ProductFeatures from "@/components/ProductFeatures";
import TestomonialCard from "@/components/TestomonialCard";

export default function Home() {
  return (  
    
    <div className="dark">
        
        <ImagesSliderDemo />
        {/* <HeroSection /> */}
        <CarousalProduct />
        <BentoGridDemo />
        <ProductFeatures />
          {/* // here Image of the trucks means banner of the trucks transport */}
        <TestomonialCard />
        
    </div>
  );
}
