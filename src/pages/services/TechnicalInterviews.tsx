
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, Settings, Search, TrendingUp } from "lucide-react";

const TechnicalInterviews: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Interview Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Hire the right talent to run and maintain your HR ERP system. Our specialized technical 
            interview services ensure your shortlisted candidates possess the precise capabilities 
            required for long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              <Link to="/contact">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/case-studies">See Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Why Our Technical Interview Services?</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Minimize hiring risks and ensure your HR ERP system is managed by truly qualified professionals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* In-depth Skill Validation */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <CheckCircle />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">In-depth Skill Validation</h3>
              <p className="text-gray-600 text-center">
                We verify technical proficiency and practical experience with specific HR ERP platforms.
              </p>
            </div>
            
            {/* Role-Specific Assessment */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <Target />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Role-Specific Assessment</h3>
              <p className="text-gray-600 text-center">
                Our interviews are tailored to the demands of the position, ensuring a perfect fit.
              </p>
            </div>
            
            {/* Risk Reduction */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <Settings />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Risk Reduction</h3>
              <p className="text-gray-600 text-center">
                Minimize hiring mistakes by ensuring candidates have proven expertise needed.
              </p>
            </div>
            
            {/* Team Efficiency */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <Users />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Team Efficiency</h3>
              <p className="text-gray-600 text-center">
                Free up your internal resources by outsourcing the technical vetting process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Assess Section */}
      <section className="py-16 bg-brand-teal bg-opacity-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Our Assessment Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Technical Proficiency */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Technical Proficiency</h3>
              <p className="text-gray-600 mb-6">
                We thoroughly evaluate candidates' hands-on experience with HR ERP platforms, 
                including configuration, customization, and troubleshooting capabilities.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Platform-specific knowledge</li>
                <li>Configuration and setup</li>
                <li>Integration capabilities</li>
                <li>Security and compliance</li>
              </ul>
            </div>
            
            {/* Practical Experience */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Practical Experience</h3>
              <p className="text-gray-600 mb-6">
                Beyond theoretical knowledge, we assess real-world experience through scenario-based 
                questions and practical problem-solving exercises.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Project implementation experience</li>
                <li>Problem-solving approach</li>
                <li>Best practices knowledge</li>
                <li>Change management experience</li>
              </ul>
            </div>
            
            {/* Business Understanding */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Business Understanding</h3>
              <p className="text-gray-600 mb-6">
                We evaluate candidates' understanding of HR processes and how technology 
                solutions support business objectives and compliance requirements.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>HR process knowledge</li>
                <li>Compliance understanding</li>
                <li>Business impact awareness</li>
                <li>Stakeholder management</li>
              </ul>
            </div>
            
            {/* Cultural Fit */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Cultural Fit</h3>
              <p className="text-gray-600 mb-6">
                We assess communication skills, teamwork abilities, and alignment with your 
                organization's values and working style.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Communication skills</li>
                <li>Team collaboration</li>
                <li>Adaptability</li>
                <li>Learning mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Interview Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Our Interview Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="text-brand-teal text-3xl font-bold mb-4 text-center">01</div>
              <h3 className="text-xl font-semibold text-brand-blue mb-4 text-center">Requirements Review</h3>
              <p className="text-gray-600 text-center mb-4">
                We work with you to understand the specific role requirements and success criteria.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Role specification review</li>
                <li>Technical requirements mapping</li>
                <li>Success criteria definition</li>
              </ul>
            </div>
            
            {/* Phase 2 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="text-brand-teal text-3xl font-bold mb-4 text-center">02</div>
              <h3 className="text-xl font-semibold text-brand-blue mb-4 text-center">Technical Assessment</h3>
              <p className="text-gray-600 text-center mb-4">
                Comprehensive evaluation of technical skills through structured interviews and practical scenarios.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Technical knowledge testing</li>
                <li>Scenario-based questions</li>
                <li>Problem-solving evaluation</li>
              </ul>
            </div>
            
            {/* Phase 3 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="text-brand-teal text-3xl font-bold mb-4 text-center">03</div>
              <h3 className="text-xl font-semibold text-brand-blue mb-4 text-center">Detailed Report</h3>
              <p className="text-gray-600 text-center mb-4">
                Comprehensive assessment report with recommendations and candidate ranking.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Detailed assessment results</li>
                <li>Strengths and areas for development</li>
                <li>Hiring recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Proven Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Metric 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-brand-teal mb-2">95%</div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2">Success Rate</h3>
              <p className="text-gray-600">
                Of candidates we recommend successfully complete their probation period.
              </p>
            </div>
            
            {/* Metric 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-brand-teal mb-2">60%</div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2">Time Savings</h3>
              <p className="text-gray-600">
                Reduction in your team's time spent on technical interviews.
              </p>
            </div>
            
            {/* Metric 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-brand-teal mb-2">85%</div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">
                Of clients report improved hiring quality with our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Hire with Confidence?</h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with us to ensure you hire HR ERP professionals who will drive your system's success 
              and deliver long-term value to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                <Link to="/contact">Start Partnership</Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalInterviews;
