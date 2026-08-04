import { useTranslation } from "react-i18next";
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

export const Portfolio = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
  { key: "all", label: t("portfolio.categories.all") },
  { key: "branding", label: t("portfolio.categories.branding") },
  { key: "packaging", label: t("portfolio.categories.packaging") },
  { key: "print", label: t("portfolio.categories.print") },
  { key: "social", label: t("portfolio.categories.social") },
];

  const projects = [
  {
    id: 1,
    title: t("portfolio.projects.1.title"),
    category: "branding",
    image: "/portfolio/luxury-brand-identity.png",
    description: t("portfolio.projects.1.description"),
  },
  {
    id: 2,
    title: t("portfolio.projects.2.title"),
    category: "packaging",
    image: "/portfolio/premium-cosmetic-packaging.png",
    description: t("portfolio.projects.2.description"),
  },
  {
    id: 3,
    title: t("portfolio.projects.3.title"),
    category: "branding",
    image: "/portfolio/corporate-stationery.png",
    description: t("portfolio.projects.3.description"),
  },
  {
    id: 4,
    title: t("portfolio.projects.4.title"),
    category: "packaging",
    image: "/portfolio/product-label-design.png",
    description: t("portfolio.projects.4.description"),
  },
  {
    id: 5,
    title: t("portfolio.projects.5.title"),
    category: "print",
    image: "/portfolio/marketing-brochure.png",
    description: t("portfolio.projects.5.description"),
  },
  {
    id: 6,
    title: t("portfolio.projects.6.title"),
    category: "social",
    image: "/portfolio/social-media-campaign.png",
    description: t("portfolio.projects.6.description"),
  },
  {
    id: 7,
    title: t("portfolio.projects.7.title"),
    category: "branding",
    image: "/portfolio/business-card-collection.png",
    description: t("portfolio.projects.7.description"),
  },
  {
    id: 8,
    title: t("portfolio.projects.8.title"),
    category: "packaging",
    image: "/portfolio/premium-product-box.png",
    description: t("portfolio.projects.8.description"),
  },
  {
    id: 9,
    title: t("portfolio.projects.9.title"),
    category: "print",
    image: "/portfolio/event-poster-design.png",
    description: t("portfolio.projects.9.description"),
  },
];

  const filteredProjects =
  selectedCategory === "all"
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
            <span className="text-sm font-semibold text-red-600">{t("portfolio.badge")}</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("portfolio.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("portfolio.description")}
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
    key={category.key}
    data-testid={`portfolio-filter-${category.key}`}
    onClick={() => setSelectedCategory(category.key)}
    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
      selectedCategory === category.key
        ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30"
        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
    }`}
  >
    {category.label}
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