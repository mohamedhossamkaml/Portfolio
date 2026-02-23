import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animations";
import { useLanguage } from "../../context/LanguageContext";
import { Building2, Home, Factory, Building, Hotel } from "lucide-react";

// Types
interface Category {
  name: string;
  icon: React.ElementType;
  count: number;
}

const GalleryCategories: React.FC = () => {
  const { t } = useLanguage();

  //
  const categoriesObj = t?.galleryPage?.categories ?? {};
  const categoriesData: { name: string; count: number }[] = Object.values(categoriesObj);

  //
  const icons = [Building2, Home, Building, Factory, Hotel];

  //
  const categories: Category[] = categoriesData.map((cat, index) => ({
    name: cat.name,
    icon: icons[index],
    count: cat.count,
  }));

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-md hover:shadow-lg transition-all border-2 border-teal-500 dark:border-teal-400"
            >
              <category.icon
                className="text-teal-600 dark:text-teal-400"
                size={20}
              />
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {category.name}
              </span>
              <span className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-full text-sm">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCategories;
