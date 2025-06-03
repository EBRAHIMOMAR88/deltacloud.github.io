
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Ready to transform your HR operations? Get in touch with our team to discuss your SAP SuccessFactors, Workday, or Oracle Fusion HCM implementation needs.
          </p>
        </div>
      </div>
      
      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 business hours.
              </p>
              <ContactForm />
            </div>
            
            <div className="bg-brand-gray p-8 rounded-lg h-fit">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-brand-blue mb-2">Address</p>
                  <address className="not-italic text-gray-600">
                    19 Coldharbour Lane<br />
                    Hayes, England<br />
                    UB3 3EA
                  </address>
                </div>
                
                <div>
                  <p className="font-semibold text-brand-blue mb-2">Email</p>
                  <p className="text-gray-600">
                    <a href="mailto:info@deltacloudassociates.com" className="hover:text-brand-teal transition-colors">
                      info@deltacloudassociates.com
                    </a>
                  </p>
                </div>
                
                <hr className="border-gray-300" />
                
                <div>
                  <p className="font-semibold text-brand-blue mb-2">Working Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
                
                <div>
                  <p className="font-semibold text-brand-blue mb-2">Connect With Us</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-brand-blue hover:text-brand-teal transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="#" className="text-brand-blue hover:text-brand-teal transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                    <a href="#" className="text-brand-blue hover:text-brand-teal transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-brand-gray py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Our Location</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8967891234567!2d-0.4207123!3d51.5052001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767b0b0b0b0b0b%3A0x0!2s19+Coldharbour+Ln%2C+Hayes+UB3+3EA%2C+UK!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
              title="Delta Cloud Associates Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
