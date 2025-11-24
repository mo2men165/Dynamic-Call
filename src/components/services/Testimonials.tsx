import { motion } from 'framer-motion';
import { SectionTitle } from '../shared/SectionTitle';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Quote, Star, Building2 } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      role: 'CEO',
      company: 'TechMart Egypt',
      image: null,
      rating: 5,
      quote: 'Dynamic Call transformed our customer service operations. Their team handles 10,000+ calls monthly with exceptional professionalism. Customer satisfaction increased by 45% in just three months.',
      industry: 'E-commerce',
    },
    {
      id: 2,
      name: 'Sarah Mohamed',
      role: 'Operations Manager',
      company: 'HealthCare Plus',
      image: null,
      rating: 5,
      quote: 'The multilingual support has been a game-changer for our diverse patient base. Their agents are knowledgeable, empathetic, and truly understand our industry needs.',
      industry: 'Healthcare',
    },
    {
      id: 3,
      name: 'Omar Khaled',
      role: 'Sales Director',
      company: 'FinanceHub',
      image: null,
      rating: 5,
      quote: 'Outstanding outbound sales team! They consistently exceed our lead generation targets. The CRM integration is seamless, and the reporting dashboards provide incredible insights.',
      industry: 'Finance',
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />
      
      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Trusted by leading businesses across Egypt"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quote icon */}
                <div className="relative mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-slate-100 group-hover:bg-slate-900 transition-colors duration-300">
                    <Quote className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-blue-500 text-blue-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 leading-relaxed mb-6 flex-1 text-base">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    {/* Avatar placeholder */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-600 mb-1">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Building2 className="w-3.5 h-3.5" />
                        <span className="truncate">{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Industry badge */}
                  <div className="mt-4 inline-flex items-center px-3 py-1.5 bg-slate-50 rounded-lg border border-gray-200">
                    <span className="text-xs font-medium text-slate-600">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { value: '98%', label: 'Client Satisfaction' },
              { value: '500+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

