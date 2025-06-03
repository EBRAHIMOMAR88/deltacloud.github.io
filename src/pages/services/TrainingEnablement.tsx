import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, BookOpen, Target, Award, GraduationCap } from "lucide-react";

const TrainingEnablement: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training & User Enablement</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Comprehensive training programs to ensure successful user adoption of your HR technology platforms. 
            From administrator training to end-user enablement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
              <Link to="/contact">Start Training</Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/case-studies">Training Success</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-12">Key Benefits of Our Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <BookOpen className="text-brand-blue size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Improved User Adoption</h3>
              <p className="text-gray-600 text-center">Ensure your team fully utilizes the HR technology platform, maximizing your investment.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <Target className="text-brand-blue size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Increased Productivity</h3>
              <p className="text-gray-600 text-center">Empower users with the knowledge and skills to perform tasks efficiently and effectively.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <Award className="text-brand-blue size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Reduced Errors</h3>
              <p className="text-gray-600 text-center">Minimize mistakes and ensure data accuracy through comprehensive training.</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <GraduationCap className="text-brand-blue size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Customized Programs</h3>
              <p className="text-gray-600 text-center">Tailored training solutions to meet your organization's specific needs and objectives.</p>
            </div>
            
            {/* Benefit 5 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <Users className="text-brand-blue size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Expert Trainers</h3>
              <p className="text-gray-600 text-center">Learn from experienced HR technology consultants with in-depth platform knowledge.</p>
            </div>
            
            {/* Benefit 6 */}
            <div className="bg-brand-gray p-6 rounded-lg shadow-md flex flex-col items-center">
              <CheckCircle className="text-brand-blue size-8 mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2 text-center">Ongoing Support</h3>
              <p className="text-gray-600 text-center">Continued assistance and resources to reinforce learning and address any questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <section className="py-16 bg-brand-teal bg-opacity-10">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-12">Our Training Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Module 1 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Administrator Training</h3>
              <p className="text-gray-600 mb-4">
                Equip your HR team with the skills to manage and configure the HR technology platform effectively.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>System Configuration</li>
                <li>User Management</li>
                <li>Reporting & Analytics</li>
                <li>Workflow Automation</li>
              </ul>
            </div>
            
            {/* Module 2 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">End-User Training</h3>
              <p className="text-gray-600 mb-4">
                Enable employees to use the HR technology platform with confidence and ease.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Self-Service Tasks</li>
                <li>Performance Management</li>
                <li>Learning & Development</li>
                <li>Benefits Enrollment</li>
              </ul>
            </div>
            
            {/* Module 3 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Train-the-Trainer Programs</h3>
              <p className="text-gray-600 mb-4">
                Develop internal training capabilities to ensure ongoing knowledge transfer and support.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Training Methodology</li>
                <li>Content Development</li>
                <li>Presentation Skills</li>
                <li>Knowledge Assessment</li>
              </ul>
            </div>
            
            {/* Module 4 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Customized Training Content</h3>
              <p className="text-gray-600 mb-4">
                Tailor training materials to reflect your organization's specific processes, policies, and branding.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Branded Training Materials</li>
                <li>Role-Based Content</li>
                <li>Interactive Simulations</li>
                <li>Real-World Scenarios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-12">Our Training Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Engaging and Interactive Learning</h3>
              <p className="text-gray-600 mb-6">
                We use a variety of training methods to keep participants engaged and ensure effective knowledge transfer.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Interactive Workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Hands-On Exercises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Real-World Case Studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span>Online Learning Modules</span>
                </li>
              </ul>
            </div>
            
            {/* Image */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1550345332-09e3ac9876fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                alt="Training Session" 
                className="rounded-lg shadow-lg" 
              />
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
              Contact us to develop a customized training program that ensures successful adoption of your HR technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
                <Link to="/contact">Plan Training</Link>
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

export default TrainingEnablement;
