import { motion } from "framer-motion";

const items = [
  "🌍 Across Countries",
  "🌎 Across Continents",
  "🕒 Across Time Zones",
  "💻 Across Screens",
  "📚 Across Classrooms",
];

function GlobalSection() {
  return (
    <>
      <section className="education-section" id="education-never-stopped">
        <motion.div
          className="education-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Learning beyond limits</span>
          <h2>Education never stopped.</h2>
          <p>Classroom, screen, or kitchen table: teachers kept showing up, and learning kept moving forward.</p>
        </motion.div>
        <div className="education-aside" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit-core">Learn<br />together</span>
        </div>
      </section>

      <section className="connection-section" id="learning-everywhere">
        <div className="connection-heading">
          <span className="eyebrow">Different places. One purpose.</span>
          <h2>Teachers connected the world through learning.</h2>
        </div>
        <div className="connection-list">
          {items.map((item, index) => (
            <motion.div
              className="connection-item"
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span className="connection-number">0{index + 1}</span>
              <span>{item.replace(/^\S+\s/, "")}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default GlobalSection;
``