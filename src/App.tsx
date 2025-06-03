
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import SynergyInnovations from "./pages/case-studies/SynergyInnovations";
import Manufacturing from "./pages/case-studies/Manufacturing";
import Healthcare from "./pages/case-studies/Healthcare";
import Finance from "./pages/case-studies/Finance";
import NotFound from "./pages/NotFound";
import SuccessFactors from "./pages/services/SuccessFactors";
import Workday from "./pages/services/Workday";
import Oracle from "./pages/services/Oracle";
import Implementation from "./pages/services/Implementation";
import CustomizationIntegration from "./pages/services/CustomizationIntegration";
import ManagedServices from "./pages/services/ManagedServices";
import TrainingEnablement from "./pages/services/TrainingEnablement";
import ConsultingAdvisory from "./pages/services/ConsultingAdvisory";
import HrErpAdvisory from "./pages/services/HrErpAdvisory";
import TechnicalInterviews from "./pages/services/TechnicalInterviews";
import ErpStaffTraining from "./pages/services/ErpStaffTraining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/synergy-innovations" element={<SynergyInnovations />} />
          <Route path="/case-studies/manufacturing" element={<Manufacturing />} />
          <Route path="/case-studies/healthcare" element={<Healthcare />} />
          <Route path="/case-studies/finance" element={<Finance />} />
          <Route path="/services/successfactors" element={<SuccessFactors />} />
          <Route path="/services/workday" element={<Workday />} />
          <Route path="/services/oracle" element={<Oracle />} />
          <Route path="/services/implementation" element={<Implementation />} />
          <Route path="/services/customization-integration" element={<CustomizationIntegration />} />
          <Route path="/services/customization" element={<CustomizationIntegration />} />
          <Route path="/services/managed-services" element={<ManagedServices />} />
          <Route path="/services/support" element={<ManagedServices />} />
          <Route path="/services/training-enablement" element={<TrainingEnablement />} />
          <Route path="/services/training" element={<TrainingEnablement />} />
          <Route path="/services/consulting-advisory" element={<ConsultingAdvisory />} />
          <Route path="/services/consulting" element={<ConsultingAdvisory />} />
          {/* New Service Routes */}
          <Route path="/services/hr-erp-advisory" element={<HrErpAdvisory />} />
          <Route path="/services/technical-interviews" element={<TechnicalInterviews />} />
          <Route path="/services/erp-staff-training" element={<ErpStaffTraining />} />
          {/* Alternative routes for SEO */}
          <Route path="/services/advisory" element={<HrErpAdvisory />} />
          <Route path="/services/interviews" element={<TechnicalInterviews />} />
          <Route path="/services/staff-training" element={<ErpStaffTraining />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
