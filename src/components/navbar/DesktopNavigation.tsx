
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServicesDropdown from "./ServicesDropdown";

const DesktopNavigation: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      <Link
        to="/"
        className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
      >
        About Us
      </Link>
      <ServicesDropdown />
      <Link
        to="/case-studies"
        className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
      >
        Case Studies
      </Link>
      <Button 
        asChild 
        className="bg-brand-teal text-white border-brand-teal hover:bg-brand-teal-dark font-medium"
      >
        <Link to="/contact">Request a Consultation</Link>
      </Button>
    </div>
  );
};

export default DesktopNavigation;
