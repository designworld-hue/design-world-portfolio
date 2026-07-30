import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react';
import { toast } from 'sonner';
import { WHATSAPP_URL, WHATSAPP_NUMBER } from '../lib/whatsapp';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Missing Information', {
        description: 'Please fill in all required fields.',
      });
      return;
    }

    // Create WhatsApp message with the exact requested format
    const messageText = `Hi Vivek,
I visited your Design World portfolio website. I need graphic design services. Can we discuss my project?

My Name:
${formData.name}

My Email:
${formData.email}

My Phone:
${formData.phone || 'Not provided'}

Project Details:
${formData.message}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    toast.success('Redirecting to WhatsApp', {
      description: 'Opening WhatsApp with your message...',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kharghar, Navi Mumbai, Maharashtra, India',
      link: 'https://maps.google.com/?q=Kharghar,Navi+Mumbai',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+91 9322994747',
      link: WHATSAPP_URL,
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'designworld.print47@gmail.com',
      link: 'mailto:designworld.print47@gmail.com',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@design.world_official',
      link: 'https://instagram.com/design.world_official',
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-red-600">Get In Touch</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reach out through any of these channels. We're always excited to hear about new projects!
              </p>
            </div>

            {/* Founder Card */}
            <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-xl">
              <img
                src="/founder.webp"
                alt="Vivekanand Garje"
                className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
              />
              <div>
                <div className="text-white font-bold text-lg">Vivekanand Garje</div>
                <div className="text-gray-300 text-sm">Founder & Creative Director</div>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500 mb-1">
                        {info.title}
                      </div>
                      <div className="text-gray-900 font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-xl h-64"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30260.507839207165!2d73.06234467431642!3d19.04567998749847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8f1d968e5f8f5b6e!2sKharghar%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/5 border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    data-testid="contact-name-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    data-testid="contact-email-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    data-testid="contact-phone-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    value={formData.message}
                    data-testid="contact-message-input"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  data-testid="contact-submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message via WhatsApp
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};