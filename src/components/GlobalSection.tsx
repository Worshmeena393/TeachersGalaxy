import { motion } from "framer-motion";

const lessons = [
  "Some lessons were taught in classrooms.",
  "Some lessons were taught online.",
  "Some lessons were taught through words.",
  "Some lessons were taught through example.",
  "All of them helped shape the future.",
];

const items = [
  "🌍 Across Countries",
  "🌎 Across Continents",
  "🕒 Across Time Zones",
  "💻 Across Screens",
  "📚 Across Classrooms",
];

function ChapterNavigation({
  previous,
  next,
  current,
}: {
  previous: string;
  next: string;
  current: string;
}) {
  return (
    <nav className="chapter-navigation" aria-label="Tribute chapters">
      <a className="chapter-link chapter-link-previous" href={previous}>
        <span aria-hidden="true">←</span> Previous
      </a>
      <span className="chapter-progress">{current} <span>/ 05</span></span>
      <a className="chapter-link chapter-link-next" href={next}>
        Continue <span aria-hidden="true">→</span>
      </a>
    </nav>
  );
}

function GlobalSection() {
  return (
    <div className="tribute-chapters">
      <section className="tribute-page lessons-page" id="tribute-lessons">
        <div className="chapter-content">
          <motion.div
            className="global-banner"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Many Ways We Learn
          </motion.div>
          <div className="lesson-list">
            {lessons.map((lesson, index) => (
              <motion.p
                key={lesson}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                <span className="lesson-index">0{index + 1}</span>
                {lesson}
              </motion.p>
            ))}
          </div>
        </div>
        <ChapterNavigation previous="#tribute-lessons" next="#education-never-stopped" current="01" />
      </section>

      <section className="tribute-page education-page" id="education-never-stopped">
        <div className="chapter-content education-content">
          <motion.div
            className="global-banner"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Learning Beyond Limits
          </motion.div>
          <motion.h1
            className="global-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            EDUCATION NEVER STOPPED
          </motion.h1>
          <motion.p
            className="global-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            No matter where teachers and students were, learning continued to
            connect minds and keep curiosity alive across every distance.
          </motion.p>
          <div className="education-rule" aria-hidden="true"><span /></div>
        </div>
        <ChapterNavigation previous="#tribute-lessons" next="#learning-everywhere" current="02" />
      </section>

      <section className="tribute-page reach-page" id="learning-everywhere">
        <div className="chapter-content">
          <motion.div
            className="global-banner"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A world connected by teachers
          </motion.div>
          <div className="global-grid">
            {items.map((item, index) => (
              <motion.div
                key={item}
                className="global-card"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
          <motion.h2
            className="global-message"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Teachers Connected The World Through Learning
          </motion.h2>
        </div>
        <ChapterNavigation previous="#education-never-stopped" next="#teachers-shape-futures" current="03" />
      </section>
    </div>
  );
}

export default GlobalSection;
``