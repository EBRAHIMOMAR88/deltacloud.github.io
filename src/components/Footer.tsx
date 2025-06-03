import React from "react";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Delta Cloud Associates</h3>
            <p className="mb-4 text-gray-300">
              Expert implementation solutions for SAP SuccessFactors, Workday, and Oracle Fusion HCM.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/successfactors" className="text-gray-300 hover:text-white transition-colors">
                  SAP SuccessFactors
                </Link>
              </li>
              <li>
                <Link to="/services/workday" className="text-gray-300 hover:text-white transition-colors">
                  Workday
                </Link>
              </li>
              <li>
                <Link to="/services/oracle" className="text-gray-300 hover:text-white transition-colors">
                  Oracle Fusion HCM
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/implementation" className="text-gray-300 hover:text-white transition-colors">
                  Implementation
                </Link>
              </li>
              <li>
                <Link to="/services/customization" className="text-gray-300 hover:text-white transition-colors">
                  Customization & Integration
                </Link>
              </li>
              <li>
                <Link to="/services/support" className="text-gray-300 hover:text-white transition-colors">
                  Managed Services & Support
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-gray-300 hover:text-white transition-colors">
                  Training & Enablement
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-gray-300 hover:text-white transition-colors">
                  Consulting & Advisory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">19 Coldharbour Lane</p>
              <p className="mb-2">Hayes, England</p>
              <p className="mb-4">UB3 3EA</p>
              <p>
                <a href="mailto:info@deltacloudassociates.com" className="text-gray-300 hover:text-white transition-colors">
                  info@deltacloudassociates.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Delta Cloud Associates. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-gray-400">
          </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;