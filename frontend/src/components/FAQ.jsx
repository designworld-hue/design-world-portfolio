import { useTranslation } from "react-i18next";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { WHATSAPP_URL, trackWhatsAppClick } from '../lib/whatsapp';
export const FAQ = () => {
  const { t } = useTranslation();

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

const faqs = [
  {
    question: t("faq.items.1.question"),
    answer: t("faq.items.1.answer"),
  },
  {
    question: t("faq.items.2.question"),
    answer: t("faq.items.2.answer"),
  },
  {
    question: t("faq.items.3.question"),
    answer: t("faq.items.3.answer"),
  },
  {
    question: t("faq.items.4.question"),
    answer: t("faq.items.4.answer"),
  },
  {
    question: t("faq.items.5.question"),
    answer: t("faq.items.5.answer"),
  },
  {
    question: t("faq.items.6.question"),
    answer: t("faq.items.6.answer"),
  },
  {
    question: t("faq.items.7.question"),
    answer: t("faq.items.7.answer"),
  },
  {
    question: t("faq.items.8.question"),
    answer: t("faq.items.8.answer"),
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
            <span className="text-sm font-semibold text-red-600">{t("faq.badge")}</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("faq.description")}
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
            {t("faq.cta.title")}
          </h3>
          <p className="text-gray-600 mb-6">
            {t("faq.cta.description")}
          </p>
          <a
          href={WHATSAPP_URL}
          onClick={() => trackWhatsAppClick("FAQ")}
          target="_blank"
          rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-105 transition-all duration-300"
          >
            {t("faq.cta.button")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};