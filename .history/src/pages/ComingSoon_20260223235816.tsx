import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom"; // لو بتستخدم React Router

const ComingSoon: React.FC<{ title?: string }> = ({ title }) => {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen
                        bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center p-10 rounded-2xl shadow-lg bg-white dark:bg-gray-800
                   border border-gray-200 dark:border-gray-700 max-w-lg"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="flex justify-center mb-6"
        >
          <Clock size={64} className="text-teal-600 dark:text-teal-400" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          {title || t.comingSoon.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {t.comingSoon.message}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-2 rounded-lg bg-teal-600 text-white font-semibold
                       hover:bg-teal-700 transition-colors"
          >
            {t.comingSoon.backHome}
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-700
                       text-gray-900 dark:text-white font-semibold
                       hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {t.comingSoon.contactMe}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
