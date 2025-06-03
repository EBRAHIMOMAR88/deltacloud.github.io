import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, TrendingUp, Lightbulb, Search, Settings } from "lucide-react";

const ConsultingAdvisory: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Consulting & Advisory Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Strategic HR technology consulting to help you make informed decisions, optimize processes, 
            and maximize your technology investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/case-studies">View Results</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Our Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategic Planning */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <Lightbulb />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Strategic Planning</h3>
              <p className="text-gray-600 text-center">
                Align your HR technology with your business goals through expert strategic planning.
              </p>
            </div>
            
            {/* Process Optimization */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <Settings />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Process Optimization</h3>
              <p className="text-gray-600 text-center">
                Streamline HR processes and workflows for maximum efficiency and productivity.
              </p>
            </div>
            
            {/* Technology Assessment */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <Search />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Technology Assessment</h3>
              <p className="text-gray-600 text-center">
                Evaluate your current HR technology landscape and identify areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-brand-teal bg-opacity-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Why Choose Our Consulting Services?</h2>
            <p className="text-xl text-gray-600">
              Expert guidance to optimize your HR technology investments and drive business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Deep Expertise</h3>
              </div>
              <p className="text-gray-600">
                Our consultants have extensive experience with leading HR technology platforms.
              </p>
            </div>
            
            {/* Custom Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Custom Solutions</h3>
              </div>
              <p className="text-gray-600">
                We tailor our consulting services to meet your specific business needs and objectives.
              </p>
            </div>
            
            {/* Proven Results */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <TrendingUp className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Proven Results</h3>
              </div>
              <p className="text-gray-600">
                We have a track record of delivering measurable results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Our Consulting Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Step 1: Assessment */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">1. Assessment</h3>
              <p className="text-gray-600 mb-6">
                We start by conducting a thorough assessment of your current HR technology landscape, business processes, and strategic objectives.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Review of existing systems and processes</li>
                <li>Stakeholder interviews</li>
                <li>Gap analysis</li>
              </ul>
            </div>
            
            {/* Step 2: Strategy Development */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">2. Strategy Development</h3>
              <p className="text-gray-600 mb-6">
                Based on the assessment, we develop a customized HR technology strategy that aligns with your business goals and addresses your specific challenges.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Roadmap for technology implementation</li>
                <li>Process optimization recommendations</li>
                <li>Change management plan</li>
              </ul>
            </div>
            
            {/* Step 3: Implementation Support */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">3. Implementation Support</h3>
              <p className="text-gray-600 mb-6">
                We provide ongoing support throughout the implementation process, ensuring that your HR technology solutions are deployed successfully and deliver the desired results.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Project management</li>
                <li>Configuration and customization</li>
                <li>Training and enablement</li>
              </ul>
            </div>
            
            {/* Step 4: Optimization */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">4. Optimization</h3>
              <p className="text-gray-600 mb-6">
                After implementation, we help you optimize your HR technology solutions to maximize their value and ensure they continue to meet your evolving business needs.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Performance monitoring</li>
                <li>Continuous improvement</li>
                <li>Ongoing support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Client: Fortune 500 Company</h3>
              <p className="text-gray-600 mb-4">
                Challenge: Needed to streamline HR processes and improve employee engagement.
              </p>
              <p className="text-gray-600 mb-4">
                Solution: Implemented SAP SuccessFactors and provided ongoing consulting support.
              </p>
              <p className="text-gray-600">
                Result: Improved employee satisfaction by 30% and reduced HR costs by 20%.
              </p>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Client: Mid-Sized Business</h3>
              <p className="text-gray-600 mb-4">
                Challenge: Needed to modernize HR technology and improve data accuracy.
              </p>
              <p className="text-gray-600 mb-4">
                Solution: Implemented Workday and provided training and enablement services.
              </p>
              <p className="text-gray-600">
                Result: Improved data accuracy by 40% and reduced time-to-hire by 25%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Strategic HR Technology Guidance?</h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a consultation with our experts to discuss your HR technology strategy and optimization opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
                <Link to="/contact">Schedule Consultation</Link>
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

export default ConsultingAdvisory;
