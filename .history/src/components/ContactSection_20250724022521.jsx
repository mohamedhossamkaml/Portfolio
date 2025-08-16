function ContactSection() {
  return (
    <motion.section {...fadeUp} id="contact" className="py-16 px-6 bg-white dark:bg-deepMint-800 text-deepMint-800 dark:text-deepMint-50">
      <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded bg-deepMint-100 dark:bg-deepMint-900" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded bg-deepMint-100 dark:bg-deepMint-900" />
        <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-2 border rounded bg-deepMint-100 dark:bg-deepMint-900"></textarea>
        <button type="submit" className="bg-deepMint-500 text-white px-6 py-2 rounded hover:bg-deepMint-600 transition">
          Send Message
        </button>
      </form>
    </motion.section>
  );
}

export default ContactSection