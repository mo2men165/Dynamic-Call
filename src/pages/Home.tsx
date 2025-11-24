import { HeroSection } from '../components/home/HeroSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { StatsCounter } from '../components/home/StatsCounter';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CTASection } from '../components/home/CTASection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <StatsCounter />
      <WhyChooseUs />
      <CTASection />
    </>
  );
};