import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Settings, TrendingUp, Shield, Clock } from "lucide-react";

const SuccessFactors: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SAP SuccessFactors Implementation</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Transform your HR operations with comprehensive SAP SuccessFactors implementation services. 
            From Employee Central to full talent management suites, we deliver solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Key Benefits of SuccessFactors</h2>
            <p className="section-subtitle">
              Unlock the potential of your workforce with our expert implementation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-brand-teal mr-3 w-6 h-6" />
                <h3 className="text-xl font-semibold text-brand-blue">Streamlined HR Processes</h3>
              </div>
              <p className="text-gray-600">Automate and simplify HR tasks, reducing manual effort and improving efficiency.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Users className="text-brand-teal mr-3 w-6 h-6" />
                <h3 className="text-xl font-semibold text-brand-blue">Improved Employee Engagement</h3>
              </div>
              <p className="text-gray-600">Enhance employee experience with user-friendly tools for performance management, learning, and collaboration.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Settings className="text-brand-teal mr-3 w-6 h-6" />
                <h3 className="text-xl font-semibold text-brand-blue">Centralized HR Data</h3>
              </div>
              <p className="text-gray-600">Gain a single source of truth for all HR data, enabling better decision-making and reporting.</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <TrendingUp className="text-brand-teal mr-3 w-6 h-6" />
                <h3 className="text-xl font-semibold text-brand-blue">Enhanced Talent Management</h3>
              </div>
              <p className="text-gray-600">Attract, develop, and retain top talent with integrated recruiting, performance, and succession planning tools.</p>
            </div>
            
            {/* Benefit 5 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Shield className="text-brand-teal mr-3 w-6 h-6" />
                <h3 className="text-xl font-semibold text-brand-blue">Compliance & Security</h3>
              </div>
              <p className="text-gray-600">Ensure compliance with data privacy regulations and protect sensitive employee information.</p>
            </div>
            
            {/* Benefit 6 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Clock className="text-brand-teal mr-3 w-6 h-6" />
                <h3 className="text-xl font-semibold text-brand-blue">Real-Time Analytics</h3>
              </div>
              <p className="text-gray-600">Access real-time HR metrics and analytics to track performance and identify areas for improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach Section */}
      <section className="py-16 bg-brand-teal bg-opacity-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Our SuccessFactors Implementation Approach</h2>
            <p className="section-subtitle">
              A structured methodology for successful SuccessFactors implementations
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
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Discovery & Planning</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business objectives, current processes, and requirements through workshops and stakeholder interviews to create a detailed implementation plan.
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
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Design & Configuration</h3>
                  <p className="text-gray-600">
                    We design the solution architecture and configure the system according to your requirements, ensuring alignment with best practices and your business processes.
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
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Testing & Validation</h3>
                  <p className="text-gray-600">
                    We conduct thorough testing, including unit testing, integration testing, and user acceptance testing to ensure the system functions as expected and meets your requirements.
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
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Data Migration & Integration</h3>
                  <p className="text-gray-600">
                    We execute the data migration strategy, ensuring clean and accurate data transfer from legacy systems, and implement integrations with other business systems.
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
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Training & Go-Live</h3>
                  <p className="text-gray-600">
                    We develop and deliver comprehensive training programs for administrators and end-users, provide go-live support, and ensure a smooth transition to the new system.
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
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Post-Implementation Support</h3>
                  <p className="text-gray-600">
                    We provide ongoing support to address any issues, optimize system performance, and help you leverage new features and capabilities as they become available.
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

      {/* SuccessFactors Modules Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-16">SuccessFactors Modules We Implement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Employee Central */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Employee Central</h3>
              <p className="text-gray-600">
                Manage core HR processes, such as employee data, organizational structure, and global benefits, in a centralized system.
              </p>
            </div>
            
            {/* Recruiting & Onboarding */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Recruiting & Onboarding</h3>
              <p className="text-gray-600">
                Attract top talent, streamline the hiring process, and ensure a smooth onboarding experience for new hires.
              </p>
            </div>
            
            {/* Performance & Goals */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Performance & Goals</h3>
              <p className="text-gray-600">
                Align employee goals with business objectives, track performance, and provide continuous feedback to drive employee success.
              </p>
            </div>
            
            {/* Learning */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Learning</h3>
              <p className="text-gray-600">
                Develop employee skills and knowledge with a comprehensive learning management system that supports formal and informal learning.
              </p>
            </div>
            
            {/* Compensation */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Compensation</h3>
              <p className="text-gray-600">
                Manage employee compensation, including salary, bonuses, and equity, with a flexible and data-driven system.
              </p>
            </div>
            
            {/* Succession & Development */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-brand-blue mb-4">Succession & Development</h3>
              <p className="text-gray-600">
                Identify and develop future leaders with tools for succession planning, talent assessment, and career development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your HR with SuccessFactors?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our SuccessFactors expertise can help streamline your HR operations and drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link to="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessFactors;
