import { motion } from "framer-motion";

const moments = [
  {
    chapter: "01",
    phase: "The first day",
    title: "Every beginning holds a question.",
    text: "A room full of possibility. A first brave answer. Someone patient enough to make curiosity feel welcome.",
  },
  {
    chapter: "02",
    phase: "Guidance",
    title: "A steady voice beside the path.",
    text: "Teachers gave direction without taking the journey away, helping us find our own way forward.",
  },
  {
    chapter: "03",
    phase: "The challenge",
    title: "Not every answer came easily.",
    text: "When the work felt too hard, a teacher reminded us that struggle is part of learning, not the end of it.",
  },
  {
    chapter: "04",
    phase: "Growth",
    title: "Little by little, we became more.",
    text: "Practice became progress. Doubt made room for confidence. The lessons reached far beyond the classroom.",
  },
  {
    chapter: "05",
    phase: "Success",
    title: "One day, we stood on our own.",
    text: "Every achievement carried traces of the people who taught us to keep going and believe we could.",
  },
  {
    chapter: "06",
    phase: "Gratitude",
    title: "The lesson stays with us.",
    text: "Long after the final bell, a teacher's care continues in every choice, every dream, every future we shape.",
  }
];

function Gifts() {
  return (
    <section className="journey-section" id="story-moments">
      <div className="journey-heading">
        <span className="eyebrow">The journey we share</span>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          Every lesson shaped <em>a future.</em>
        </motion.h2>
        <p>Six moments in a lifetime of learning. One teacher's lasting mark.</p>
      </div>

      <ol className="journey-track">
        {moments.map((moment, index) => (
          <motion.li
            className="journey-step"
            key={moment.chapter}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index % 2 === 0 ? 0.04 : 0.12 }}
          >
            <span className="journey-marker" aria-hidden="true">{moment.chapter}</span>
            <article className="journey-copy">
              <span className="journey-phase">{moment.phase}</span>
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
            </article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

export default Gifts;