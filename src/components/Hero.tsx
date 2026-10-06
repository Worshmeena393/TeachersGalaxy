import { motion } from "framer-motion";

interface HeroProps {
  onStart: () => void;
}

function Hero({ onStart }: HeroProps) {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.p
          className="hero-small"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          A story of the people who helped us become
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Every lesson
          <br />
          shaped a future.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          From a first question to a future you never imagined, a teacher was
          there.
        </motion.p>

        <motion.button
          className="gold-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
        >
          Begin the story
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;