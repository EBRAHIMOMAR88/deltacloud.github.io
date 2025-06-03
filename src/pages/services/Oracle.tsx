import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Settings, TrendingUp, Shield, Clock } from "lucide-react";

const Oracle: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Oracle Fusion HCM Implementation</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Leverage Oracle's comprehensive cloud HCM solution with our expert implementation services. 
            Streamline HR processes and gain powerful analytics capabilities.
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
          <h2 className="section-title text-center mb-12">Key Benefits of Oracle Fusion HCM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="mx-auto h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Streamlined HR Processes</h3>
              <p className="text-gray-600">Automate and standardize HR processes for improved efficiency and accuracy.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md text-center">
              <Users className="mx-auto h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Improved Employee Experience</h3>
              <p className="text-gray-600">Empower employees with self-service tools and personalized experiences.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md text-center">
              <Settings className="mx-auto h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Enhanced Reporting & Analytics</h3>
              <p className="text-gray-600">Gain real-time insights into your workforce with comprehensive reporting and analytics.</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md text-center">
              <TrendingUp className="mx-auto h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Better Talent Management</h3>
              <p className="text-gray-600">Attract, develop, and retain top talent with integrated talent management tools.</p>
            </div>
            
            {/* Benefit 5 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md text-center">
              <Shield className="mx-auto h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Compliance & Security</h3>
              <p className="text-gray-600">Ensure compliance with regulatory requirements and protect sensitive employee data.</p>
            </div>
            
            {/* Benefit 6 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md text-center">
              <Clock className="mx-auto h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Scalability & Flexibility</h3>
              <p className="text-gray-600">Scale your HR operations as your business grows with a flexible cloud-based solution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps Section */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-12">Our Oracle Fusion HCM Implementation Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Step 1 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">1. Discovery & Planning</h3>
              <p className="text-gray-600 mb-4">
                We start by understanding your business requirements, current HR processes, and strategic goals. 
                This phase involves workshops, stakeholder interviews, and detailed documentation.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Requirement Gathering</li>
                <li>Process Analysis</li>
                <li>Project Planning</li>
              </ul>
            </div>
            
            {/* Step 2 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">2. Design & Configuration</h3>
              <p className="text-gray-600 mb-4">
                Based on the discovery phase, we design the solution architecture and configure Oracle Fusion HCM 
                to align with your specific needs and industry best practices.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Solution Design</li>
                <li>System Configuration</li>
                <li>Data Mapping</li>
              </ul>
            </div>
            
            {/* Step 3 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">3. Testing & Validation</h3>
              <p className="text-gray-600 mb-4">
                We conduct rigorous testing to ensure the system functions as expected and meets your requirements. 
                This includes unit testing, integration testing, and user acceptance testing (UAT).
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Unit Testing</li>
                <li>Integration Testing</li>
                <li>User Acceptance Testing</li>
              </ul>
            </div>
            
            {/* Step 4 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">4. Data Migration & Integration</h3>
              <p className="text-gray-600 mb-4">
                We migrate your data from legacy systems to Oracle Fusion HCM, ensuring data integrity and accuracy. 
                We also integrate the system with other business applications.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Data Extraction</li>
                <li>Data Transformation</li>
                <li>System Integration</li>
              </ul>
            </div>
            
            {/* Step 5 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">5. Training & Go-Live</h3>
              <p className="text-gray-600 mb-4">
                We provide comprehensive training to your HR team and end-users to ensure they can effectively use 
                the new system. We also provide go-live support to ensure a smooth transition.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>User Training</li>
                <li>Administrator Training</li>
                <li>Go-Live Support</li>
              </ul>
            </div>
            
            {/* Step 6 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">6. Post-Implementation Support</h3>
              <p className="text-gray-600 mb-4">
                We offer ongoing support to address any issues, optimize system performance, and help you leverage 
                new features and capabilities as they become available.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Ongoing Support</li>
                <li>System Optimization</li>
                <li>New Feature Implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Oracle Fusion HCM Modules Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-12">Oracle Fusion HCM Modules We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core HR */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Core HR</h3>
              <p className="text-gray-600">Manage employee data, organization structures, and HR processes.</p>
            </div>
            
            {/* Talent Management */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Talent Management</h3>
              <p className="text-gray-600">Attract, develop, and retain top talent with integrated talent management tools.</p>
            </div>
            
            {/* Payroll */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Payroll</h3>
              <p className="text-gray-600">Automate payroll processing and ensure accurate and timely payments.</p>
            </div>
            
            {/* Benefits */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Benefits</h3>
              <p className="text-gray-600">Manage employee benefits programs and ensure compliance with regulations.</p>
            </div>
            
            {/* Time & Labor */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Time & Labor</h3>
              <p className="text-gray-600">Track employee time and attendance and manage labor costs effectively.</p>
            </div>
            
            {/* HR Analytics */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">HR Analytics</h3>
              <p className="text-gray-600">Gain insights into your workforce with comprehensive HR analytics and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Implement Oracle Fusion HCM?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how Oracle Fusion HCM can transform your HR operations and drive business growth.
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

export default Oracle;
