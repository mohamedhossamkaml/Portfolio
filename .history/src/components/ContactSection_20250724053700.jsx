import { motion } from "framer-motion"; import { fadeUp, fadeLeft, fadeRight, zoomIn } from "../utils/animations";

function ContactSection() {
  return (
    <motion.section {...fadeUp} {...zoomIn} id="contact" className="py-16 px-6 bg-white dark:bg-deepMint-800 text-deepMint-800 dark:text-deepMint-50">
      <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
      <motion.form {...zoomIn} className="max-w-xl mx-auto space-y-4">
        <motion.input {...fadeLeft} type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded bg-deepMint-100 dark:bg-deepMint-900" />
        <motion.input {...fadeRight} type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded bg-deepMint-100 dark:bg-deepMint-900" />
        <motion.textarea {...fadeLeft} rows="5" placeholder="Your Message" className="w-full px-4 py-2 border rounded bg-deepMint-100 dark:bg-deepMint-900"></motion.textarea>
        <motion.button  {...zoomIn} type="submit" className="bg-deepMint-500 text-white px-6 py-2 rounded hover:bg-deepMint-600 transition">
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
}

export default ContactSection