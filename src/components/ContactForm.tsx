
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface FormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  service: string;
}

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "SAP SuccessFactors",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormValues({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        service: "SAP SuccessFactors",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name*</Label>
          <Input
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address*</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            required
            placeholder="john.doe@company.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company Name*</Label>
          <Input
            id="company"
            name="company"
            value={formValues.company}
            onChange={handleChange}
            required
            placeholder="Your Company"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            placeholder="+1 (123) 456-7890"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="service">Service of Interest*</Label>
          <select
            id="service"
            name="service"
            value={formValues.service}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          >
            <option value="SAP SuccessFactors">SAP SuccessFactors Implementation</option>
            <option value="Workday">Workday Implementation</option>
            <option value="Oracle">Oracle Fusion HCM Implementation</option>
            <option value="Customization">Customization & Integration</option>
            <option value="Support">Managed Services & Support</option>
            <option value="Training">Training & Enablement</option>
            <option value="Consulting">Consulting & Advisory</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message">Message*</Label>
          <Textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project needs..."
            rows={6}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-brand-blue hover:bg-brand-blue-light text-white py-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  );
};

export default ContactForm;
