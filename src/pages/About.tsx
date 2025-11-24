import { motion } from 'framer-motion';
import { CompanyStory } from '../components/about/CompanyStory';
import { TeamValues } from '../components/about/TeamValues';
import { TechnologyStack } from '../components/about/TechnologyStack';
import { Achievements } from '../components/about/Achievements';
import { AboutHero } from '../components/about/AboutHero';

export const About = () => {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <TechnologyStack />
      <TeamValues />
      <Achievements />
    </>
  );
};