
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-teal/70"></div>

      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[15%] w-32 h-32 rounded-full bg-white/5 animate-float"></div>
        <div className="absolute bottom-[20%] left-[10%] w-24 h-24 rounded-full bg-white/5 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-[40%] left-[20%] w-16 h-16 rounded-full bg-white/5 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue font-semibold"
              onClick={() => navigate(ctaLink)}
            >
              {ctaText}
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-blue font-semibold"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
