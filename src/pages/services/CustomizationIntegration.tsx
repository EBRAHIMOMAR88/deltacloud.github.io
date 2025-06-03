import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Settings, Link as LinkIcon, Code, Puzzle } from "lucide-react";

const CustomizationIntegration: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customization & Integration</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Tailor your HR technology platforms to meet specific business needs and integrate seamlessly 
            with existing systems for optimal workflow efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
              <Link to="/contact">Discuss Requirements</Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/case-studies">Integration Examples</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <CheckCircle className="text-brand-teal size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Tailored Solutions</h3>
              <p className="text-gray-600 text-center">Customized HR technology to fit your unique business processes.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <LinkIcon className="text-brand-teal size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Seamless Integration</h3>
              <p className="text-gray-600 text-center">Connect your HR systems with other business applications for streamlined workflows.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <Code className="text-brand-teal size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Enhanced Efficiency</h3>
              <p className="text-gray-600 text-center">Automate tasks and reduce manual effort with customized solutions.</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <Puzzle className="text-brand-teal size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Improved Data Accuracy</h3>
              <p className="text-gray-600 text-center">Ensure data consistency across all integrated systems.</p>
            </div>
            
            {/* Benefit 5 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <Settings className="text-brand-teal size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Scalable Solutions</h3>
              <p className="text-gray-600 text-center">Adapt your HR technology as your business grows and evolves.</p>
            </div>
            
            {/* Benefit 6 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <Users className="text-brand-teal size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Better User Experience</h3>
              <p className="text-gray-600 text-center">Provide a more intuitive and user-friendly HR technology experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-brand-teal bg-opacity-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Customization & Integration Approach</h2>
            <p className="section-subtitle">
              A structured methodology for successful HR technology customization and integration
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-brand-teal/30 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <span className="inline-block bg-brand-teal text-white text-sm py-1 px-3 rounded-full mb-2">Phase 1</span>
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Requirements Gathering</h3>
                  <p className="text-gray-600">
                    We start by understanding your specific business needs, existing systems, and desired outcomes through detailed workshops and stakeholder interviews.
                  </p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      1
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex justify-start">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      1
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:flex justify-center order-1 md:order-1">
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      2
                    </div>
                  </div>
                </div>
                <div className="order-2 md:order-2">
                  <span className="inline-block bg-brand-teal text-white text-sm py-1 px-3 rounded-full mb-2">Phase 2</span>
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Solution Design</h3>
                  <p className="text-gray-600">
                    Based on your requirements, we design a tailored solution architecture, including customization specifications and integration points with other systems.
                  </p>
                </div>
                <div className="md:hidden flex justify-start order-1">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      2
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <span className="inline-block bg-brand-teal text-white text-sm py-1 px-3 rounded-full mb-2">Phase 3</span>
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Development & Configuration</h3>
                  <p className="text-gray-600">
                    Our expert developers and consultants configure and customize your HR technology platforms, ensuring seamless integration with your existing systems.
                  </p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      3
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex justify-start">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      3
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:flex justify-center order-1 md:order-1">
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      4
                    </div>
                  </div>
                </div>
                <div className="order-2 md:order-2">
                  <span className="inline-block bg-brand-teal text-white text-sm py-1 px-3 rounded-full mb-2">Phase 4</span>
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Testing & Validation</h3>
                  <p className="text-gray-600">
                    We conduct rigorous testing, including unit testing, integration testing, and user acceptance testing, to ensure the solution functions as expected and meets your requirements.
                  </p>
                </div>
                <div className="md:hidden flex justify-start order-1">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      4
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <span className="inline-block bg-brand-teal text-white text-sm py-1 px-3 rounded-full mb-2">Phase 5</span>
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Deployment & Go-Live</h3>
                  <p className="text-gray-600">
                    We deploy the customized and integrated solution, provide go-live support, and ensure a smooth transition to the new system.
                  </p>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      5
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex justify-start">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      5
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:flex justify-center order-1 md:order-1">
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      6
                    </div>
                  </div>
                </div>
                <div className="order-2 md:order-2">
                  <span className="inline-block bg-brand-teal text-white text-sm py-1 px-3 rounded-full mb-2">Phase 6</span>
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Ongoing Support & Maintenance</h3>
                  <p className="text-gray-600">
                    We provide ongoing support and maintenance to address any issues, optimize system performance, and help you leverage new features and capabilities as they become available.
                  </p>
                </div>
                <div className="md:hidden flex justify-start order-1">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full border-4 border-brand-teal flex items-center justify-center text-brand-teal font-bold">
                      6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Customize Your HR Technology?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your specific customization and integration needs to create a solution that fits perfectly with your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
                <Link to="/contact">Start Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomizationIntegration;
