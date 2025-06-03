
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Manufacturing: React.FC = () => {
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
              <BreadcrumbPage>Manufacturing Case Study</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-teal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Manufacturing Sector</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Global SAP SuccessFactors Implementation for Manufacturing Excellence
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Standardising HR processes across 20 countries for a leading manufacturing company, 
              resulting in significant efficiency gains and improved workforce management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">5,000+</div>
                <div className="text-white/80">Employees</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">20</div>
                <div className="text-white/80">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-white/80">Admin Reduction</div>
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
              This detailed case study is currently being prepared. It will showcase how Delta Cloud Associates 
              helped a leading manufacturing company implement SAP SuccessFactors across 20 countries, 
              standardising HR processes and achieving remarkable efficiency improvements.
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

export default Manufacturing;
