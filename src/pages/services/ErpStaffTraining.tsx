
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, Settings, GraduationCap, BookOpen, Award } from "lucide-react";

const ErpStaffTraining: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ERP HR Staff Training & Enablement</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Maximize your HR ERP investment by ensuring your staff is fully proficient with the new system. 
            Our comprehensive training programs empower your team to leverage the system's full potential 
            and drive continuous efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              <Link to="/contact">Design Training Program</Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/case-studies">View Training Success</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Training Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Our Training Programs</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Tailored training solutions designed for all levels of expertise, ensuring your entire team 
            is confident and capable with your HR ERP system.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HR Managers */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <Target />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">HR Managers</h3>
              <p className="text-gray-600 text-center mb-4">
                Strategic insights, advanced reporting, and system oversight for HR leadership.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Strategic dashboard usage</li>
                <li>Advanced reporting and analytics</li>
                <li>System administration</li>
                <li>Compliance management</li>
              </ul>
            </div>
            
            {/* Regular Employees */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <Users />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Regular Employees</h3>
              <p className="text-gray-600 text-center mb-4">
                Self-service portals, basic functions, and daily interactions with the system.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Self-service portal navigation</li>
                <li>Time and attendance</li>
                <li>Benefits enrollment</li>
                <li>Personal data management</li>
              </ul>
            </div>
            
            {/* Train the Trainer */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <GraduationCap />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Train the Trainer</h3>
              <p className="text-gray-600 text-center mb-4">
                Equipping internal champions with knowledge and tools to train their peers effectively.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Training methodology</li>
                <li>Content development</li>
                <li>Assessment techniques</li>
                <li>Ongoing support strategies</li>
              </ul>
            </div>
            
            {/* Advanced Users */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <Settings />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Advanced Users</h3>
              <p className="text-gray-600 text-center mb-4">
                System administration, configuration, troubleshooting, and optimization.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Advanced configuration</li>
                <li>Troubleshooting techniques</li>
                <li>Performance optimization</li>
                <li>Integration management</li>
              </ul>
            </div>
            
            {/* Customized Workshops */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <BookOpen />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Customized Workshops</h3>
              <p className="text-gray-600 text-center mb-4">
                Tailored to specific modules, business processes, or unique organizational needs.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Module-specific training</li>
                <li>Process-based workshops</li>
                <li>Role-specific scenarios</li>
                <li>Industry-specific use cases</li>
              </ul>
            </div>
            
            {/* Certification Programs */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-brand-blue text-5xl mb-4 flex items-center justify-center">
                <Award />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2 text-center">Certification Programs</h3>
              <p className="text-gray-600 text-center mb-4">
                Formal certification to validate competency and build confidence.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Competency assessment</li>
                <li>Certification testing</li>
                <li>Digital badges</li>
                <li>Continuing education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Delivery Methods Section */}
      <section className="py-16 bg-brand-teal bg-opacity-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Training Delivery Methods</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* On-Site Training */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">On-Site Training</h3>
              <p className="text-gray-600 mb-6">
                Instructor-led training sessions conducted at your location, providing hands-on experience 
                with your actual system configuration and data.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Customized to your environment</li>
                <li>Interactive group sessions</li>
                <li>Real-time Q&A</li>
                <li>Team building opportunities</li>
              </ul>
            </div>
            
            {/* Virtual Training */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Virtual Training</h3>
              <p className="text-gray-600 mb-6">
                Live online training sessions that provide the same quality instruction while 
                accommodating remote teams and reducing travel costs.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Interactive online sessions</li>
                <li>Screen sharing and demos</li>
                <li>Breakout room exercises</li>
                <li>Recorded sessions for review</li>
              </ul>
            </div>
            
            {/* Hybrid Training */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Hybrid Training</h3>
              <p className="text-gray-600 mb-6">
                Combination of on-site and virtual sessions to maximize flexibility while 
                ensuring comprehensive coverage of all training objectives.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Flexible scheduling</li>
                <li>Cost-effective approach</li>
                <li>Multi-location support</li>
                <li>Scalable delivery</li>
              </ul>
            </div>
            
            {/* Self-Paced Learning */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Self-Paced Learning</h3>
              <p className="text-gray-600 mb-6">
                Interactive e-learning modules that allow users to learn at their own pace 
                while tracking progress and ensuring competency.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>24/7 accessibility</li>
                <li>Progress tracking</li>
                <li>Interactive simulations</li>
                <li>Assessment checkpoints</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Training Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Higher Adoption */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Higher Adoption Rates</h3>
              </div>
              <p className="text-gray-600">
                Well-trained users are more confident and likely to fully utilize system capabilities.
              </p>
            </div>
            
            {/* Reduced Support */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Reduced Support Tickets</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive training significantly reduces the number of user support requests.
              </p>
            </div>
            
            {/* Faster ROI */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Faster ROI</h3>
              </div>
              <p className="text-gray-600">
                Effective training accelerates the realization of your HR ERP system benefits.
              </p>
            </div>
            
            {/* Improved Efficiency */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Settings className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Improved Efficiency</h3>
              </div>
              <p className="text-gray-600">
                Proper training leads to more efficient use of system features and capabilities.
              </p>
            </div>
            
            {/* Better Compliance */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Better Compliance</h3>
              </div>
              <p className="text-gray-600">
                Trained users are more likely to follow proper procedures and maintain compliance.
              </p>
            </div>
            
            {/* Employee Satisfaction */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users className="text-brand-teal mr-2" size={24} />
                <h3 className="text-lg font-semibold text-brand-blue">Employee Satisfaction</h3>
              </div>
              <p className="text-gray-600">
                Confident users are more satisfied with the system and their overall work experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">Training Success Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Metric 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2">92%</div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2">User Adoption</h3>
              <p className="text-gray-600 text-sm">
                Of trained users actively use the system daily after training completion.
              </p>
            </div>
            
            {/* Metric 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2">75%</div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2">Support Reduction</h3>
              <p className="text-gray-600 text-sm">
                Decrease in support tickets after comprehensive training programs.
              </p>
            </div>
            
            {/* Metric 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2">6 mo</div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2">ROI Timeline</h3>
              <p className="text-gray-600 text-sm">
                Average time to achieve full ROI with proper training implementation.
              </p>
            </div>
            
            {/* Metric 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2">4.8/5</div>
              <h3 className="text-lg font-semibold text-brand-blue mb-2">Satisfaction Score</h3>
              <p className="text-gray-600 text-sm">
                Average training satisfaction rating from participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Empower Your Team?</h2>
            <p className="text-xl text-white/90 mb-8">
              Design a comprehensive training program that ensures your team is confident, capable, 
              and ready to maximize your HR ERP system investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                <Link to="/contact">Design Training Program</Link>
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

export default ErpStaffTraining;
