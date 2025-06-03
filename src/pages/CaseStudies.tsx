
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        title="Transforming Businesses Through Strategic HR Technology Implementation" 
        subtitle="Explore real-world success stories showcasing how Delta Cloud Associates has helped organisations achieve remarkable HR transformation and measurable business outcomes."
        ctaText="View Our Latest Case Study"
        ctaLink="/case-studies/synergy-innovations"
      />
      
      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="section-title">Proven Results Across Industries</h2>
            <p className="text-lg text-gray-600 mb-12">
              Our portfolio demonstrates consistent success in delivering HR technology solutions that drive operational efficiency, 
              enhance employee experience, and provide measurable return on investment. Each case study showcases our expertise 
              in implementing SAP SuccessFactors, Workday, and Oracle Fusion HCM across diverse industry sectors.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Case Study */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Case Study</h2>
            <p className="section-subtitle">
              Multi-Platform Cloud HCM Implementation for Global Technology Firm
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Technology workspace with code"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-teal/60"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Synergy Innovations</h3>
                  <p className="text-white/90">Global Technology Company • 2,500 Employees • 10 Countries</p>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-teal mb-2">75%</div>
                    <div className="text-gray-600">Reduction in HR Admin Tasks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-teal mb-2">52%</div>
                    <div className="text-gray-600">Faster Time-to-Hire</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-teal mb-2">30%</div>
                    <div className="text-gray-600">Cost Savings</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  A comprehensive case study demonstrating how Delta Cloud Associates successfully integrated 
                  SAP SuccessFactors, Workday, and Oracle Fusion HCM to transform HR operations for a rapidly 
                  expanding global technology firm.
                </p>
                <Button asChild className="bg-brand-blue hover:bg-brand-blue-light text-white">
                  <Link to="/case-studies/synergy-innovations">Read Full Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">All Case Studies</h2>
            <p className="section-subtitle">
              Explore our complete portfolio of successful HR transformation projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Multi-Platform Cloud HCM Implementation"
              client="Synergy Innovations"
              industry="Technology"
              description="Comprehensive integration of SAP SuccessFactors, Workday, and Oracle Fusion HCM resulting in 75% reduction in admin tasks and 52% faster hiring."
              imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              link="/case-studies/synergy-innovations"
            />
            
            <CaseStudyCard
              title="Global SuccessFactors Implementation"
              client="Leading Manufacturing Company"
              industry="Manufacturing"
              description="Implemented SAP SuccessFactors across 20 countries, resulting in standardised HR processes and a 40% reduction in administrative workload."
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
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-brand-teal/20 to-brand-teal/10 p-8 md:p-12 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Your Own Success Story?</h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us today to discuss how Delta Cloud Associates can help transform your HR operations and achieve measurable business outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-brand-gray-dark transition-colours">
                  <Link to="/contact">Start Your Transformation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue transition-colours">
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

export default CaseStudies;
