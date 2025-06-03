import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Delta Cloud Associates</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Specialists in SAP SuccessFactors, Workday, and Oracle Fusion HCM implementations, 
            helping businesses transform their HR operations through technology.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">Delta Cloud Associates was founded in 2019 by a team of experienced HR technology consultants who recognised the growing need for specialised implementation services as businesses began transitioning to cloud-based HR solutions.</p>
              <p className="text-gray-600 mb-6">
                What started as a small team focused solely on SAP SuccessFactors has grown into a comprehensive HR technology consulting firm with expertise across multiple platforms, including Workday and Oracle Fusion HCM.
              </p>
              <p className="text-gray-600">
                Today, we serve clients across various industries and sizes, from mid-sized businesses to Fortune 500 companies, helping them leverage HR technology to drive efficiency, improve employee experiences, and achieve strategic business outcomes.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-teal/20 rounded-lg"></div>
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Team working together" className="rounded-lg shadow-lg relative z-10" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Mission & Values</h2>
            <p className="section-subtitle">
              What drives us and defines our approach to client partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower organizations to maximize their HR technology investments through expert implementation, optimization, and ongoing support, enabling them to transform their HR operations and drive business success.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the trusted partner of choice for HR technology implementations, known for our technical expertise, client-focused approach, and ability to deliver transformative results.
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span><strong>Excellence</strong> in everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span><strong>Integrity</strong> and transparency in our client relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span><strong>Innovation</strong> in our approach to solving complex challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span><strong>Collaboration</strong> with our clients and within our team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-16">Our Expertise</h2>
          
          <div className="space-y-16">
            {/* SAP SuccessFactors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">SAP SuccessFactors</h3>
                <p className="text-gray-600 mb-6">
                  As certified SAP SuccessFactors implementation specialists, our team has successfully delivered over 100+ implementations across various industries. We offer comprehensive expertise across the entire SAP SuccessFactors suite, including Employee Central, Recruiting & Onboarding, Performance & Goals, Learning, Compensation, and Succession & Development.
                </p>
                <p className="text-gray-600">
                  Our consultants stay up-to-date with the latest SAP SuccessFactors updates and best practices to ensure optimal system configuration and user adoption.
                </p>
              </div>
              <div className="bg-brand-gray p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded text-center">
                    <div className="text-brand-teal font-bold text-4xl mb-2">100+</div>
                    <div className="text-gray-600">Implementations</div>
                  </div>
                  <div className="bg-white p-4 rounded text-center">
                    <div className="text-brand-teal font-bold text-4xl mb-2">15+</div>
                    <div className="text-gray-600">Industries Served</div>
                  </div>
                  <div className="bg-white p-4 rounded text-center">
                    <div className="text-brand-teal font-bold text-4xl mb-2">98%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="bg-white p-4 rounded text-center">
                    <div className="text-brand-teal font-bold text-4xl mb-2">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Workday */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-brand-gray p-6 rounded-lg">
                <ul className="space-y-4">
                  <li className="bg-white p-4 rounded flex items-start">
                    <div className="p-1 rounded-full bg-brand-teal/20 text-brand-teal mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Full Implementation Services</h4>
                      <p className="text-gray-600 text-sm">End-to-end Workday implementation from planning to go-live and beyond</p>
                    </div>
                  </li>
                  <li className="bg-white p-4 rounded flex items-start">
                    <div className="p-1 rounded-full bg-brand-teal/20 text-brand-teal mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Core HCM & Payroll</h4>
                      <p className="text-gray-600 text-sm">Expert configuration of essential HR and payroll functions</p>
                    </div>
                  </li>
                  <li className="bg-white p-4 rounded flex items-start">
                    <div className="p-1 rounded-full bg-brand-teal/20 text-brand-teal mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Talent Management</h4>
                      <p className="text-gray-600 text-sm">Optimize recruiting, performance, and succession planning</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Workday</h3>
                <p className="text-gray-600 mb-6">
                  Our Workday practice helps businesses implement and optimize Workday Human Capital Management, offering a modern, unified solution for HR, talent management, and payroll processes.
                </p>
                <p className="text-gray-600">
                  With our expertise in Workday implementation methodology, we ensure a smooth transition to this powerful platform, enabling organizations to streamline operations, enhance reporting capabilities, and improve the overall employee experience.
                </p>
              </div>
            </div>
            
            {/* Oracle Fusion HCM */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Oracle Fusion HCM</h3>
                <p className="text-gray-600 mb-6">
                  Our Oracle Fusion HCM consultants specialize in implementing this comprehensive cloud-based HR solution, helping organizations modernize their HR processes and leverage advanced capabilities for workforce management, talent development, and strategic HR analytics.
                </p>
                <p className="text-gray-600">
                  We work closely with your team to configure Oracle Fusion HCM to meet your specific business requirements, integrate it with your existing systems, and provide training to ensure successful adoption.
                </p>
              </div>
              <div className="bg-brand-blue/5 p-6 rounded-lg">
                <h4 className="font-bold text-brand-blue mb-4">Oracle Fusion HCM Modules We Support</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded">Core HR</div>
                  <div className="bg-white p-3 rounded">Payroll</div>
                  <div className="bg-white p-3 rounded">Benefits</div>
                  <div className="bg-white p-3 rounded">Time & Labor</div>
                  <div className="bg-white p-3 rounded">Talent Management</div>
                  <div className="bg-white p-3 rounded">Workforce Management</div>
                  <div className="bg-white p-3 rounded">Work Life Solutions</div>
                  <div className="bg-white p-3 rounded">HR Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-16 bg-brand-teal bg-opacity-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Implementation Approach</h2>
            <p className="section-subtitle">
              A structured methodology for successful HR technology implementations
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
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your HR Operations?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how Delta Cloud Associates can help you implement and optimize your HR technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue transition-colors">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-blue transition-colors">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
