
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, TrendingUp, Search, Settings, Database } from "lucide-react";

const HrErpAdvisory: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HR ERP Solution Advisory</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Navigate the complex landscape of HR ERP solutions with expert guidance. We provide impartial, 
            strategic advice to help you choose the perfect system for your organization's unique needs and future goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              <Link to="/contact">Get Expert Guidance</Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Key Parameters Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Our Advisory Framework</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our recommendations are based on a comprehensive analysis of eight critical parameters 
            that determine the success of your HR ERP implementation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Industry Requirements */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-4xl mb-4 flex items-center justify-center">
                <Target />
              </div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2 text-center">Industry-Specific Requirements</h3>
              <p className="text-gray-600 text-center text-sm">
                Ensuring the solution aligns with your sector's unique demands and regulations.
              </p>
            </div>
            
            {/* Market Trends */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-4xl mb-4 flex items-center justify-center">
                <TrendingUp />
              </div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2 text-center">Market Trends</h3>
              <p className="text-gray-600 text-center text-sm">
                Guiding you through latest innovations and competitive landscape analysis.
              </p>
            </div>
            
            {/* HR Philosophy */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-4xl mb-4 flex items-center justify-center">
                <Users />
              </div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2 text-center">HR Philosophy</h3>
              <p className="text-gray-600 text-center text-sm">
                Matching technology to your company's core values and culture.
              </p>
            </div>
            
            {/* Best Practices */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-4xl mb-4 flex items-center justify-center">
                <CheckCircle />
              </div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2 text-center">Best Practices</h3>
              <p className="text-gray-600 text-center text-sm">
                Incorporating proven methodologies for optimal HR operations.
              </p>
            </div>
            
            {/* Stakeholder Needs */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-4xl mb-4 flex items-center justify-center">
                <Users />
              </div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2 text-center">Stakeholder Alignment</h3>
              <p className="text-gray-600 text-center text-sm">
                Aligning the system with requirements of all key users and decision-makers.
              </p>
            </div>
            
            {/* Flexibility & Scalability */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-4xl mb-4 flex items-center justify-center">
                <Settings />
              </div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2 text-center">Flexibility & Scalability</h3>
              <p className="text-gray-600 text-center text-sm">
                Choosing systems that grow and adapt with your business.
              </p>
            </div>
            
            {/* Total Cost of Ownership */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-4xl mb-4 flex items-center justify-center">
                <TrendingUp />
              </div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2 text-center">Total Cost of Ownership</h3>
              <p className="text-gray-600 text-center text-sm">
                Providing clear financial picture beyond initial implementation.
              </p>
            </div>
            
            {/* Integration Capabilities */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-4xl mb-4 flex items-center justify-center">
                <Database />
              </div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2 text-center">Integration Capabilities</h3>
              <p className="text-gray-600 text-center text-sm">
                Ensuring seamless connectivity with existing IT infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advisory Process Section */}
      <section className="py-16 bg-brand-teal bg-opacity-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Our Advisory Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Step 1: Assessment */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">1. Assessment</h3>
              <p className="text-gray-600 mb-6">
                We conduct a comprehensive analysis of your current HR landscape, business objectives, 
                and organizational structure to understand your unique requirements.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Current system evaluation</li>
                <li>Business process mapping</li>
                <li>Stakeholder interviews</li>
                <li>Requirements gathering</li>
              </ul>
            </div>
            
            {/* Step 2: Analysis */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">2. Analysis</h3>
              <p className="text-gray-600 mb-6">
                Using our eight-parameter framework, we analyze market options against your specific 
                requirements and develop a shortlist of suitable solutions.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Market landscape review</li>
                <li>Solution comparison matrix</li>
                <li>TCO analysis</li>
                <li>Risk assessment</li>
              </ul>
            </div>
            
            {/* Step 3: Recommendation */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">3. Recommendation</h3>
              <p className="text-gray-600 mb-6">
                We present our findings with clear recommendations, including detailed rationale 
                and implementation roadmap for your chosen solution.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Solution recommendation report</li>
                <li>Implementation timeline</li>
                <li>Resource requirements</li>
                <li>Success metrics</li>
              </ul>
            </div>
            
            {/* Step 4: Implementation Support */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">4. Implementation Support</h3>
              <p className="text-gray-600 mb-6">
                We provide ongoing guidance throughout the implementation process to ensure 
                your chosen solution delivers the expected business value.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Vendor selection support</li>
                <li>Project oversight</li>
                <li>Change management guidance</li>
                <li>Success measurement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Why Choose Our Advisory Services?</h2>
            <p className="text-xl text-gray-600">
              Impartial expertise to help you make the right HR ERP decision for your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vendor Agnostic */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Search className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Vendor Agnostic</h3>
              </div>
              <p className="text-gray-600">
                We provide completely impartial advice with no vendor affiliations or biases.
              </p>
            </div>
            
            {/* Deep Expertise */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Deep Expertise</h3>
              </div>
              <p className="text-gray-600">
                Extensive experience across all major HR ERP platforms and industries.
              </p>
            </div>
            
            {/* Proven Methodology */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Proven Methodology</h3>
              </div>
              <p className="text-gray-600">
                Our eight-parameter framework ensures comprehensive evaluation and optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make an Informed Decision?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let our experts guide you through the complex HR ERP landscape and help you choose 
              the perfect solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                <Link to="/contact">Schedule Advisory Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link to="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HrErpAdvisory;
