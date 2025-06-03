
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 border-t">
      <div className="flex flex-col space-y-4">
        <Link
          to="/"
          className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
          onClick={onClose}
        >
          About Us
        </Link>
        <div className="relative">
          <button className="flex items-center space-x-1 font-medium text-brand-blue">
            <span>Services</span>
            <ChevronDown size={16} />
          </button>
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            <Link
              to="/services/successfactors"
              className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
              onClick={onClose}
            >
              SAP SuccessFactors
            </Link>
            <Link
              to="/services/workday"
              className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
              onClick={onClose}
            >
              Workday
            </Link>
            <Link
              to="/services/oracle"
              className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
              onClick={onClose}
            >
              Oracle Fusion HCM
            </Link>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <Link
                to="/services/implementation"
                className="font-medium text-brand-blue hover:text-brand-teal transition-colors block"
                onClick={onClose}
              >
                Implementation
              </Link>
            </div>
            <Link
              to="/services/customization-integration"
              className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
              onClick={onClose}
            >
              Customisation & Integration
            </Link>
            <Link
              to="/services/managed-services"
              className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
              onClick={onClose}
            >
              Managed Services & Support
            </Link>
            <Link
              to="/services/training-enablement"
              className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
              onClick={onClose}
            >
              Training & Enablement
            </Link>
            <Link
              to="/services/consulting-advisory"
              className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
              onClick={onClose}
            >
              Consulting & Advisory
            </Link>
          </div>
        </div>
        <Link
          to="/case-studies"
          className="font-medium text-brand-blue hover:text-brand-teal transition-colors"
          onClick={onClose}
        >
          Case Studies
        </Link>
        <Button asChild className="bg-brand-teal hover:bg-brand-teal-dark text-white w-full font-medium">
          <Link to="/contact" onClick={onClose}>
            <span className="text-white font-medium">Request a Consultation</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
