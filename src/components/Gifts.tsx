import { motion } from "framer-motion";

const gifts = [
  {
    icon: "📚",
    title: "KNOWLEDGE",
    text: "You transformed information into understanding and opened doors to new possibilities."
  },
  {
    icon: "🧭",
    title: "GUIDANCE",
    text: "You illuminated the path forward whenever the journey seemed uncertain."
  },
  {
    icon: "💪",
    title: "CONFIDENCE",
    text: "You helped turn doubt into belief and encouraged us to aim higher."
  },
  {
    icon: "🌱",
    title: "PERSISTENCE",
    text: "You taught us that growth comes from patience, effort, and resilience."
  },
  {
    icon: "✨",
    title: "INSPIRATION",
    text: "You inspired curiosity, discovery, creativity, and lifelong learning."
  },
  {
    icon: "🌍",
    title: "IMPACT",
    text: "What you taught travels with your students, long after they leave your classroom."
  }
];

function Gifts() {
  return (
    <section className="gifts">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        The Gifts Teachers Leave Behind
      </motion.h2>

      <div className="gifts-stack">
        {gifts.map((gift, index) => (
          <motion.article
            key={gift.title}
            className="gift-card"
            initial={{ opacity: 0, y: 80, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <div className="gift-icon">{gift.icon}</div>
            <h3>{gift.title}</h3>
            <p>{gift.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Gifts;