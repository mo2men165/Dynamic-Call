import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { fadeInUp } from '../../utils/animations';
import { type ContactFormData } from '../../types';
import { CheckCircle2 } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        serviceInterest: '',
        message: '',
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-800 overflow-hidden"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-2 text-white">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-8">
          Fill out the form below and we'll get back to you within 24 hours
        </p>

        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/50">
              <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-300">
              We'll be in touch with you shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-600 focus:outline-none transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-600 focus:outline-none transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-600 focus:outline-none transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-600 focus:outline-none transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="+20 123 456 7890"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="serviceInterest"
                className="block text-sm font-semibold text-white mb-2"
              >
                Service Interest *
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                required
                value={formData.serviceInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-600 focus:outline-none transition-colors bg-gray-800 text-white"
              >
                <option value="" className="bg-gray-800">Select a service</option>
                <option value="inbound" className="bg-gray-800">Inbound Customer Support</option>
                <option value="outbound" className="bg-gray-800">Outbound Sales & Telemarketing</option>
                <option value="technical" className="bg-gray-800">Technical Support Helpdesk</option>
                <option value="multilingual" className="bg-gray-800">Multilingual Services</option>
                <option value="crm" className="bg-gray-800">CRM Integration Solutions</option>
                <option value="custom" className="bg-gray-800">Custom Solution</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-600 focus:outline-none transition-colors resize-none bg-gray-800 text-white placeholder-gray-400"
                placeholder="Tell us about your needs..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </div>
    </motion.div>
  );
};