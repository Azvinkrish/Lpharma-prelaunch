'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail('');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const complianceBadges = [
    '21 CFR Part 11',
    'GAMP 5',
    'ASME BPE',
    'ISPE',
    'ASTM E2500'
  ];

  const solutions = [
    'Design Engineering',
    'Industrial Automation',
    'Qualification & Validation',
    'Digitalization',
    'System Engineering',
    'Training'
  ];

  const products = [
    'Bioreactors',
    'Fermenters',
    'Process Vessels',
    'Filtration Skids',
    'TFF Systems',
    'CIP / SIP Stations',
    'Bio-Kill Systems'
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <motion.header 
          className="px-6 lg:px-8 py-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xl font-bold">
                L
              </div>
              <div>
                <h1 className="text-2xl font-bold">L Pharma</h1>
                <p className="text-sm text-gray-400">A division of the Laistung Group</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <MapPin size={16} className="text-purple-400" />
              <span className="text-sm">Bengaluru, India</span>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 font-medium">Coming Soon</span>
            </motion.div>

            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Engineering next-gen pharmaceutical automation
            </motion.h1>

            <motion.p 
              className="text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We deliver CGMP-compliant design, advanced control system integration, and comprehensive validation—accelerating the path from discovery to delivery and ensuring reliable, fully qualified operations.
            </motion.p>

            {/* Email Capture Form */}
            <motion.div 
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                  >
                    {isSubmitting ? 'Submitting...' : 'Notify Me'}
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-lg px-6 py-4">
                  <CheckCircle2 className="text-green-400" size={20} />
                  <span className="text-green-300 font-medium">Thank you! We'll notify you at launch.</span>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Compliance Badges */}
        <motion.section 
          className="px-6 lg:px-8 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-2xl font-bold text-center mb-8 text-gray-300"
              variants={fadeInUp}
            >
              Industry Compliance & Standards
            </motion.h2>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {complianceBadges.map((badge, index) => (
                <motion.div
                  key={badge}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition-all duration-200"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  {badge}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Highlights Section */}
        <motion.section 
          className="px-6 lg:px-8 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Solutions & Services */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Solutions & Services
                </h3>
                <div className="space-y-3">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={solution}
                      className="flex items-center space-x-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{solution}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Product Portfolio */}
              <motion.div 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Product Portfolio
                </h3>
                <div className="space-y-3">
                  {products.map((product, index) => (
                    <motion.div
                      key={product}
                      className="flex items-center space-x-3 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{product}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="px-6 lg:px-8 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-2xl font-bold text-center mb-8 text-gray-300"
              variants={fadeInUp}
            >
              Contact Information
            </motion.h2>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-center space-x-3 text-gray-300">
                <MapPin size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-left max-w-md">
                  <p className="leading-relaxed">
                    No.892, 2nd Floor, 1st Main Road,<br />
                    Wellington Paradise, AECS Layout,<br />
                    Hosur Road, Bangalore – 560068
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="px-6 lg:px-8 py-16 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-gray-400"
                variants={fadeInUp}
              >
                © {new Date().getFullYear()} L Pharma • All rights reserved.
              </motion.p>
              <motion.p 
                className="text-gray-500 text-sm"
                variants={fadeInUp}
              >
                Built with care. Launching soon.
              </motion.p>
            </motion.div>
          </div>
        </motion.footer>
      </div>

      {/* Floating particles animation */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}