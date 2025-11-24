import { ServicesHero } from '../components/services/ServicesHero';
import { ServiceCards } from '../components/services/ServiceCard';
import { ProcessFlow } from '../components/services/ProcessFlow';
import { Testimonials } from '../components/services/Testimonials';
import { PricingCTA } from '../components/services/PricingCTA';

export const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <ProcessFlow />
      <Testimonials />
      <PricingCTA />
    </>
  );
};