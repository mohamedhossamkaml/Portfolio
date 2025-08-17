import { useState } from "react";
import { services } from "../data/servicesData";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="py-16 px-6 bg-deepMint-50 dark:bg-deepMint-900 text-deepMint-800 dark:text-deepMint-50">
      <h2 className="text-4xl font-bold text-center mb-12">What I Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} onOpen={setActiveService} />
        ))}
      </div>

      {activeService && (
        <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      )}
    </section>
  );
}

export default ServicesSection;
