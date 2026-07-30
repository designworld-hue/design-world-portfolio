import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { WHATSAPP_URL } from '../lib/whatsapp';

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const faqs = [
    {
      question: 'What services does Design World offer?',
      answer: 'We offer comprehensive graphic design services including logo design, brand identity, packaging design, social media creatives, print design (brochures, flyers, business cards), product labels, wedding invitations, and marketing materials.',
    },
    {
      question: 'What is the typical turnaround time for a project?',
      answer: 'Project timelines vary based on complexity. Simple logo designs typically take 5-7 days, while complete brand identity packages may take 2-3 weeks. We always provide a clear timeline during our initial consultation.',
    },
    {
      question: 'How many revisions are included?',
      answer: 'Most packages include 2-3 rounds of revisions to ensure you\'re completely satisfied with the final design. We work closely with you until the design perfectly matches your vision.',
    },
    {
      question: 'Do you provide print-ready files?',
      answer: 'Yes! We deliver all final designs in print-ready formats (PDF, AI, EPS) along with web-optimized versions (PNG, JPG). You\'ll receive all the files you need for both digital and print use.',
    },
    {
      question: 'Can you work with my budget?',
      answer: 'We offer flexible packages to suit different budgets. Contact us to discuss your requirements, and we\'ll create a custom quote that works for you.',
    },
    {
      question: 'Do you work with clients outside Navi Mumbai?',
      answer: 'Absolutely! While we\'re based in Kharghar, Navi Mumbai, we work with clients all across India and internationally. All communication and file sharing is done digitally for your convenience.',
    },
    {
      question: 'What do I need to get started?',
      answer: 'Simply reach out via WhatsApp or email with a brief about your project. We\'ll schedule a consultation to understand your requirements, share ideas, and provide a quote.',
    },
    {
      question: 'What file formats will I receive?',
      answer: 'You\'ll receive source files (AI, PSD), print-ready PDFs, and web-optimized files (PNG, JPG). For logos, we also provide vector files for scalability.',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-red-600">FAQ</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with Design World
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl px-6 border border-gray-100 hover:border-red-200 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-gradient-to-br from-gray-50 to-red-50/30 rounded-3xl border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Reach out and we'll get back to you shortly.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-105 transition-all duration-300"
          >
            Contact Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};