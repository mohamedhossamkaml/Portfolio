// import NavLogo from "./shared/NavLogo";
// import NavMenu from "./shared/NavMenu";
// import NavClose from "./shared/NavClose";
// import NavShare from "./shared/NavShare";

// function Sidebar({ isOpen, onClose }) {

//   return (
//     <>
//       <aside
//         className={`fixed top-0 left-0 h-full w-64 z-50 bg-white dark:bg-deepMint-800 p-6 shadow-md transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//       >
//         <nav className="flex flex-col justify-between h-full">
//           <NavLogo />
//           <NavMenu />
//           <NavShare />
//           <NavClose onClick={onClose} />
//         </nav>
//       </aside>


//     </>

//   );
// }

// export default Sidebar


import NavLogo from "./shared/NavLogo";
import NavMenu from "./shared/NavMenu";
import NavClose from "./shared/NavClose";
import NavShare from "./shared/NavShare";
import { motion, AnimatePresence } from "framer-motion";

function Sidebar({ isOpen, onClose }) {
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" }
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-full w-64 z-50 bg-white dark:bg-deepMint-800 p-6 shadow-md"
        >
          <motion.nav
            className="flex flex-col justify-between h-full"
            initial="hidden"
            animate="visible"
            variants={childVariants}
            transition={{ staggerChildren: 0.1, duration: 0.4 }}
          >
            <motion.div variants={childVariants}>
              <NavLogo />
            </motion.div>
            <motion.div variants={childVariants}>
              <NavMenu />
            </motion.div>
            <motion.div variants={childVariants}>
              <NavShare />
            </motion.div>
            <motion.div variants={childVariants}>
              <NavClose onClick={onClose} />
            </motion.div>
          </motion.nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
