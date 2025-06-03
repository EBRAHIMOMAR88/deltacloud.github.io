
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-7xl font-bold text-brand-blue mb-6">404</h1>
            <p className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</p>
            <p className="text-gray-600 mb-8">
              We're sorry, but the page you requested could not be found. It might have been removed,
              renamed, or did not exist in the first place.
            </p>
            <div className="space-y-4">
              <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue-light">
                <Link to="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
