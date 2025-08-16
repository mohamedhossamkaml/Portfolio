import NavLogo from "./shared/NavLogo";
import NavMenu from "./shared/NavMenu";
import NavClose from "./shared/NavClose";
import NavShare from "./shared/NavShare";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function Sidebar({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Sidebar Content */}
          <motion.aside
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 left-0 h-full w-64 z-50 bg-white dark:bg-deepMint-800 p-6 shadow-xl"
          >
            <motion.nav
              className="flex flex-col justify-between h-full"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <NavLogo />
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavMenu />
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavShare />
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavClose onClick={onClose} />
              </motion.div>
            </motion.nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
