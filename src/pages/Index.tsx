import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import ModuleItem from "@/components/ModuleItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Expert SAP SuccessFactors Implementation for Seamless HR Transformation" 
        subtitle="Delta Cloud Associates delivers customized implementation solutions for SAP SuccessFactors, Workday, and Oracle Fusion HCM to drive your HR digital transformation."
        ctaText="Discover Our Solutions"
        ctaLink="/services/successfactors"
      />
      
      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Transforming HR Through Technology</h2>
            <p className="text-lg text-gray-600 mb-8">
              Delta Cloud Associates is a specialized consulting firm focused on implementing and optimizing leading HR cloud solutions. We help businesses harness the full potential of their SAP SuccessFactors, Workday, and Oracle Fusion HCM investments through expert implementation, customization, and ongoing support.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-brand-blue hover:bg-brand-blue-light text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions to maximize your HR technology investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Implementation"
              description="End-to-end implementation services for SAP SuccessFactors, Workday, and Oracle Fusion HCM, tailored to your business needs."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>}
              link="/services/implementation"
            />
            
            <ServiceCard 
              title="Customization & Integration"
              description="Custom configurations and seamless integrations with your existing HR ecosystem to meet your unique business requirements."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-puzzle"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 1.998 10c0-.617.236-1.234.706-1.704L4.23 6.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 0c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/></svg>}
              link="/services/customization"
            />
            
            <ServiceCard 
              title="Managed Services & Support"
              description="Ongoing management, maintenance, and support services to ensure optimal system performance and user satisfaction."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>}
              link="/services/support"
            />
            
            <ServiceCard 
              title="Training & Enablement"
              description="Comprehensive training programs designed to empower your team with the knowledge and skills needed to maximize your HR technology investment."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>}
              link="/services/training"
            />
            
            <ServiceCard 
              title="Consulting & Advisory"
              description="Strategic guidance on HR technology roadmaps, optimizing system usage, and change management to drive successful digital transformation."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>}
              link="/services/consulting"
            />
            
            <ServiceCard 
              title="HR Analytics"
              description="Leverage the power of data analytics to gain insights into your workforce, improve decision-making, and drive strategic HR initiatives."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>}
              link="/services/analytics"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* SuccessFactors Modules Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">SAP SuccessFactors Modules We Cover</h2>
            <p className="section-subtitle">
              Comprehensive expertise across the entire SAP SuccessFactors suite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModuleItem
              title="Employee Central"
              description="Core HR and payroll functions including personnel administration, organizational management, and time management."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            />
            
            <ModuleItem
              title="Recruiting & Onboarding"
              description="Streamline your talent acquisition process from job posting to candidate selection and seamless onboarding."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>}
            />
            
            <ModuleItem
              title="Performance & Goals"
              description="Align individual and organizational objectives, track progress, and provide continuous feedback."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>}
            />
            
            <ModuleItem
              title="Learning & Development"
              description="Deliver personalized learning experiences, track compliance training, and foster continuous development."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>}
            />
            
            <ModuleItem
              title="Compensation Management"
              description="Design and manage compensation plans, automate calculations, and ensure pay equity."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>}
            />
            
            <ModuleItem
              title="Succession & Development"
              description="Identify and develop high-potential employees and ensure leadership continuity."
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-brand-teal hover:bg-brand-teal-dark text-white">
              <Link to="/services/successfactors">Learn More About Our SuccessFactors Expertise</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-r from-brand-blue to-brand-teal text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Choose Delta Cloud Associates?</h2>
            <p className="text-xl md:text-2xl font-medium mb-8 text-white/90">
              Partner with experts who understand your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Deep Expertise</h3>
              <p className="text-white/80">
                Our consultants have extensive experience with SAP SuccessFactors, Workday, and Oracle Fusion HCM implementations across various industries.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M7 10v4"/><path d="M17 10v4"/><path d="M10 7h4"/><path d="M10 17h4"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Methodology</h3>
              <p className="text-white/80">
                Our structured approach ensures efficient implementations, minimizes risks, and delivers consistent results.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Client-Focused Approach</h3>
              <p className="text-white/80">
                We prioritize understanding your unique business needs and tailor our solutions accordingly to deliver maximum value.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Faster ROI</h3>
              <p className="text-white/80">
                Our efficient implementation strategies and best practices help you realize value from your HR technology investments quickly.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Real-world examples of how we've helped our clients transform their HR operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Global SuccessFactors Implementation"
              client="Leading Manufacturing Company"
              industry="Manufacturing"
              description="Implemented SAP SuccessFactors across 20 countries, resulting in standardized HR processes and a 40% reduction in administrative workload."
              imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              link="/case-studies/manufacturing"
            />
            
            <CaseStudyCard
              title="Oracle HCM Transformation"
              client="Major Healthcare Provider"
              industry="Healthcare"
              description="Streamlined HR operations with Oracle Fusion HCM, reducing hiring time by 30% and improving employee onboarding satisfaction by 45%."
              imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              link="/case-studies/healthcare"
            />
            
            <CaseStudyCard
              title="Workday Implementation & Integration"
              client="Financial Services Firm"
              industry="Finance"
              description="Successfully implemented Workday and integrated with existing finance systems, creating a unified platform and improving reporting accuracy by 60%."
              imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              link="/case-studies/finance"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-brand-teal/20 to-brand-teal/10 p-8 md:p-12 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your HR Operations?</h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us today to discuss how Delta Cloud Associates can help you maximize your HR technology investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline-light" className="border-white text-white hover:bg-white hover:text-brand-blue">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
