import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import ServiceSiphon from "./pages/ServiceSiphon";
import ServiceWC from "./pages/services/ServiceWC";
import ServiceFaucet from "./pages/services/ServiceFaucet";
import ServicePipe from "./pages/services/ServicePipe";
import ServiceShower from "./pages/services/ServiceShower";
import ServiceAppliance from "./pages/services/ServiceAppliance";
import ServiceValve from "./pages/services/ServiceValve";
import ServiceSanitary from "./pages/services/ServiceSanitary";
import ServiceHeating from "./pages/services/ServiceHeating";
import ServiceBoiler from "./pages/services/ServiceBoiler";
import ServicePipes from "./pages/services/ServicePipes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* SEO Specific Service Routes */}
              <Route path="/vymena-sifonu" element={<ServiceSiphon />} />
              <Route path="/oprava-wc" element={<ServiceWC />} />
              <Route path="/montaz-baterie" element={<ServiceFaucet />} />
              <Route path="/oprava-potrubia" element={<ServicePipe />} />
              <Route path="/montaz-sprchy" element={<ServiceShower />} />
              <Route path="/zapojenie-spotrebicov" element={<ServiceAppliance />} />
              <Route path="/vymena-ventilov" element={<ServiceValve />} />
              <Route path="/montaz-sanity" element={<ServiceSanitary />} />
              <Route path="/oprava-kurenia" element={<ServiceHeating />} />
              <Route path="/montaz-bojleru" element={<ServiceBoiler />} />
              <Route path="/vymena-rozvodov" element={<ServicePipes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
