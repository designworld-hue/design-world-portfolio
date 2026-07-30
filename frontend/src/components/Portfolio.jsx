import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

export const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Branding', 'Packaging', 'Print Design', 'Social Media'];

  const projects = [
    {
      id: 1,
      title: 'Aurelia — Luxury Brand Identity',
      category: 'Branding',
      image: '/portfolio/luxury-brand-identity.png',
      description: 'Complete brand identity with logo, business cards (front & back), letterhead, envelope, notebook, folder & pen',
    },
    {
      id: 2,
      title: 'Lumière Cosmetic Packaging',
      category: 'Packaging',
      image: '/portfolio/premium-cosmetic-packaging.png',
      description: 'Elegant packaging design with printed labels for a luxury skincare brand',
    },
    {
      id: 3,
      title: 'Nexus Corporate Stationery',
      category: 'Branding',
      image: '/portfolio/corporate-stationery.png',
      description: 'Professional business stationery with modern geometric branding',
    },
    {
      id: 4,
      title: 'Roost Product Labels',
      category: 'Packaging',
      image: '/portfolio/product-label-design.png',
      description: 'Branded product labels for an artisan coffee brand',
    },
    {
      id: 5,
      title: 'Haven Marketing Brochure',
      category: 'Print Design',
      image: '/portfolio/marketing-brochure.png',
      description: 'Tri-fold brochure with designed interior pages for a real estate brand',
    },
    {
      id: 6,
      title: 'Pulse Social Media Campaign',
      category: 'Social Media',
      image: '/portfolio/social-media-campaign.png',
      description: 'Instagram post design set for a fitness brand',
    },
    {
      id: 7,
      title: 'Business Card Collection',
      category: 'Branding',
      image: '/portfolio/business-card-collection.png',
      description: 'Premium business cards with full branding, front & back',
    },
    {
      id: 8,
      title: 'Soniq Product Packaging',
      category: 'Packaging',
      image: '/portfolio/premium-product-box.png',
      description: 'Custom branded rigid box design for a headphone brand',
    },
    {
      id: 9,
      title: 'Echo Fest Poster & Banner',
      category: 'Print Design',
      image: '/portfolio/event-poster-design.png',
      description: 'Bold artistic poster and banner design for a music festival',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" ref={ref} className="relative py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full mb-4">
            <span className="text-sm font-semibold text-red-600">Our Work</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our best design work across branding, packaging, and marketing materials
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              data-testid={`portfolio-filter-${category.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-semibold text-red-600 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};