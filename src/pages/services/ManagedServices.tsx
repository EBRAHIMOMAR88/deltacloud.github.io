import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Headphones, 
  Shield, 
  TrendingUp,
  Clock,
  Settings,
  Users,
  AlertTriangle,
  CheckCircle,
  Zap,
  RefreshCw
} from "lucide-react";

const ManagedServices: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Managed Services & Support</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Ongoing support and management for your HR technology platforms. Focus on your business 
            while we handle system administration, updates, and optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 hover:text-brand-blue">
              <Link to="/contact">Get Support</Link>
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
              Comprehensive HCM Support & Managed Services
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Keep your HCM systems running at peak performance with our comprehensive managed services. From 24/7 technical support to proactive system optimization, we ensure your investment continues to deliver maximum value.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our managed services combine technical expertise with proactive monitoring, ensuring your systems stay current, secure, and optimized for your evolving business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Complete Support & Managed Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From reactive support to proactive optimization and strategic guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <Headphones className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">24/7 Technical Support</h3>
              <p className="text-gray-600">Round-the-clock helpdesk and technical support with guaranteed response times and resolution SLAs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <Shield className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Proactive Monitoring</h3>
              <p className="text-gray-600">Continuous system monitoring with automated alerts and proactive issue resolution.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <RefreshCw className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">System Updates & Patches</h3>
              <p className="text-gray-600">Regular system updates, security patches, and platform upgrades managed seamlessly.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <TrendingUp className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Performance Optimization</h3>
              <p className="text-gray-600">Ongoing performance tuning, capacity planning, and system optimization services.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <Users className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">User Support & Training</h3>
              <p className="text-gray-600">End-user support, training programs, and change management for new features and updates.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-brand-teal/10 p-3 rounded-full w-fit mb-4">
                <Settings className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">System Administration</h3>
              <p className="text-gray-600">Complete system administration services including configuration management and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Flexible Support Tiers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the support level that matches your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border-2 border-gray-200 bg-white">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Essential Support</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-brand-teal">Basic</span>
                <span className="text-gray-600 ml-2">Coverage</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Business hours support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Email and phone support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>System monitoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Quarterly health checks</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            <div className="p-8 rounded-lg border-2 border-brand-teal bg-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Premium Support</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-brand-teal">Enhanced</span>
                <span className="text-gray-600 ml-2">Coverage</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>24/7 support coverage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Priority response times</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Proactive monitoring & alerts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Monthly optimization reviews</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Dedicated support manager</span>
                </li>
              </ul>
              <Button className="w-full bg-brand-teal hover:bg-brand-teal-dark">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            <div className="p-8 rounded-lg border-2 border-gray-200 bg-white">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Enterprise Support</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-brand-teal">Complete</span>
                <span className="text-gray-600 ml-2">Coverage</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>All Premium features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Strategic advisory services</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Custom SLA agreements</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Onsite support options</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span>Roadmap planning</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Managed Services Benefits
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Focus on your business while we manage your technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Clock className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Reduced Downtime</h3>
              <p className="text-white/80">
                Proactive monitoring and rapid response minimize system downtime and business disruption.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Zap className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Improved Performance</h3>
              <p className="text-white/80">
                Continuous optimization ensures your systems perform at peak efficiency.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Shield className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
              <p className="text-white/80">
                Regular security updates and monitoring protect your sensitive HR data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Worry-Free HR Technology Management?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us to learn how our managed services can optimize your HR technology operations and reduce your administrative burden.
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

export default ManagedServices;
