import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Rocket, Target, Clock, Shield, Settings, Database, TrendingUp, Workflow } from "lucide-react";

const Implementation: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HR Technology Implementation</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Expert implementation services for SAP SuccessFactors, Workday, and Oracle Fusion HCM. 
            We ensure seamless deployment, configuration, and go-live support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
              <Link to="/contact">Start Implementation</Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link to="/case-studies">Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              Comprehensive HCM Implementation Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our implementation services transform your HR operations through expertly deployed enterprise solutions. We handle every aspect of your HCM implementation from initial planning and system design to deployment, testing, and go-live support.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With certified consultants and proven methodologies, we ensure your implementation delivers maximum value while minimizing risk and disruption to your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Coverage */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Multi-Platform Implementation Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized implementation services across leading HCM platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <Settings className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">SAP SuccessFactors</h3>
              <p className="text-gray-600 mb-4">Complete implementation of Employee Central, Performance & Goals, Learning Management, Recruiting, and Compensation modules.</p>
              <Button asChild variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
                <Link to="/services/successfactors">Learn More</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <Users className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">Workday HCM</h3>
              <p className="text-gray-600 mb-4">End-to-end Workday deployment including HCM, Payroll, Time Tracking, Financial Management, and Planning modules.</p>
              <Button asChild variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
                <Link to="/services/workday">Learn More</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <Database className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">Oracle Fusion HCM</h3>
              <p className="text-gray-600 mb-4">Comprehensive Oracle Cloud HCM implementation covering Core HR, Talent Management, Workforce Management, and Payroll.</p>
              <Button asChild variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
                <Link to="/services/oracle">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Our Proven Implementation Methodology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures successful deployments with minimal risk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <Target className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Discover & Plan</h3>
              <p className="text-gray-600">
                Requirements gathering, business process analysis, solution architecture design, and project planning.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <Settings className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Configure & Build</h3>
              <p className="text-gray-600">
                System configuration, custom development, data migration preparation, and integration setup.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <CheckCircle className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Test & Validate</h3>
              <p className="text-gray-600">
                Comprehensive testing, user acceptance testing, performance optimization, and security validation.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <Rocket className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Deploy & Support</h3>
              <p className="text-gray-600">
                Go-live execution, production support, user training, and post-implementation optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Implementation Benefits
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Delivering measurable value through expert implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Clock className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Faster Time-to-Value</h3>
              <p className="text-white/80">
                Accelerated implementation timelines through proven methodologies and pre-built templates.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Shield className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Risk Mitigation</h3>
              <p className="text-white/80">
                Comprehensive testing and validation processes minimize implementation risks and ensure stable go-live.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <TrendingUp className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Optimized Performance</h3>
              <p className="text-white/80">
                Best practice configurations and performance tuning deliver optimal system performance from day one.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Users className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">High User Adoption</h3>
              <p className="text-white/80">
                Change management and training programs ensure high user adoption and satisfaction rates.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Workflow className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Process Optimization</h3>
              <p className="text-white/80">
                Business process reengineering opportunities identified and implemented during deployment.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Database className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Data Integrity</h3>
              <p className="text-white/80">
                Comprehensive data migration and validation ensures accurate, clean data in your new system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Implementation?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us to discuss your HR technology implementation needs and get started with a tailored approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
                <Link to="/contact">Get Started</Link>
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

export default Implementation;
