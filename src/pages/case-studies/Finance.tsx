
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Finance: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-24 pb-8 bg-white">
        <div className="container mx-auto px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/case-studies">Case Studies</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Financial Services Case Study</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-teal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Financial Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Workday Implementation & Integration for Financial Excellence
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Creating a unified HR and finance platform for a leading financial services firm, 
              improving reporting accuracy by 60% and streamlining operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">3,500+</div>
                <div className="text-white/80">Financial Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">60%</div>
                <div className="text-white/80">Better Reporting</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24</div>
                <div className="text-white/80">Month Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-12">
              This detailed case study will showcase how Delta Cloud Associates implemented Workday 
              for a financial services firm, creating seamless integration with existing finance systems 
              and delivering remarkable improvements in operational efficiency.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-brand-blue hover:bg-brand-blue-light text-white">
                <Link to="/case-studies">View Other Case Studies</Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Finance;
