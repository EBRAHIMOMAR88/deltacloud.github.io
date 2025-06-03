
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ServicesDropdown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-1 font-medium text-brand-blue hover:text-brand-teal transition-colors border-none bg-transparent p-0 h-auto">
        <span>Services</span>
        <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-white shadow-lg border">
        {/* HR ERP Platforms */}
        <DropdownMenuItem>
          <Link to="/services/successfactors" className="w-full text-brand-blue hover:text-brand-teal">
            SAP SuccessFactors
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/services/workday" className="w-full text-brand-blue hover:text-brand-teal">
            Workday
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/services/oracle" className="w-full text-brand-blue hover:text-brand-teal">
            Oracle Fusion HCM
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        {/* Implementation & Support Services */}
        <DropdownMenuItem>
          <Link to="/services/implementation" className="w-full text-brand-blue hover:text-brand-teal">
            Implementation
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/services/customization-integration" className="w-full text-brand-blue hover:text-brand-teal">
            Customisation & Integration
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/services/managed-services" className="w-full text-brand-blue hover:text-brand-teal">
            Managed Services & Support
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        {/* Advisory & Training Services */}
        <DropdownMenuItem>
          <Link to="/services/hr-erp-advisory" className="w-full text-brand-blue hover:text-brand-teal">
            HR ERP Solution Advisory
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/services/consulting-advisory" className="w-full text-brand-blue hover:text-brand-teal">
            Consulting & Advisory
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/services/technical-interviews" className="w-full text-brand-blue hover:text-brand-teal">
            Technical Interview Services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/services/erp-staff-training" className="w-full text-brand-blue hover:text-brand-teal">
            ERP HR Staff Training
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/services/training-enablement" className="w-full text-brand-blue hover:text-brand-teal">
            Training & Enablement
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesDropdown;
