import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

const ComingSoon: React.FC<{ title?: string }> = ({ title }) => {
  const { t } = useLanguage();

  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(t.comingSoon.launchDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [t.comingSoon.launchDate]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen
                        bg-gradient-to-br from-teal-500 via-purple-600 to-pink-500
                        dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
                        relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center p-10 rounded-2xl shadow-2xl bg-white dark:bg-gray-800
                   border border-gray-200 dark:border-gray-700 max-w-lg relative z-10"
      >
        {/* Animated icon */}
        <motion.div
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="flex justify-center mb-6"
        >
          <Clock size={72} className="text-teal-600 dark:text-teal-400" />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          {title || t.comingSoon.title}
        </h1>

        {/* Message */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          {t.comingSoon.message}
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 mb-8">
          {["days", "hours", "minutes", "seconds"].map((unit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center bg-gradient-to-br from-teal-500 to-teal-700
                         text-white px-4 py-2 rounded-lg shadow-md"
            >
              <span className="text-2xl font-bold">
                {timeLeft[unit as keyof typeof timeLeft]}
              </span>
              <span className="text-sm uppercase">{unit}</span>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-6 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-teal-700
                       text-white font-semibold shadow-md hover:shadow-lg
                       transition-transform transform hover:scale-105"
          >
            {t.comingSoon.backHome}
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600
                       text-white font-semibold shadow-md hover:shadow-lg
                       transition-transform transform hover:scale-105"
          >
            {t.comingSoon.contactMe}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
