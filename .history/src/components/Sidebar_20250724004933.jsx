import NavLogo from "./shared/NavLogo";
import NavMenu from "./shared/NavMenu";
import NavClose from "./shared/NavClose";
import NavShare from "./shared/NavShare";
import { motion, AnimatePresence } from "framer-motion";

function Sidebar({ isOpen, onClose }) {
  // حركة دخول وخروج الـ aside
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  // التحكم في توقيت العناصر الداخلية
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // حركة كل عنصر داخلي
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
          transition={{ type: "tween", duration: 0.4 }}
          className="fixed top-0 left-0 h-full w-64 z-50 bg-white dark:bg-deepMint-800 p-6 shadow-lg"
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
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
