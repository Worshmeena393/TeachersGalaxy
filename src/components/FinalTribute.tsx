import { motion } from "framer-motion";

const credits = [
  "To Every Professor",
  "To Every Instructor",
  "To Every Mentor",
  "To Every Educator",
  "Who Contributed To My Journey",
];

function ChapterNavigation({
  previous,
  next,
  current,
  isLast = false,
}: {
  previous: string;
  next: string;
  current: string;
  isLast?: boolean;
}) {
  return (
    <nav className="chapter-navigation" aria-label="Tribute chapters">
      <a className="chapter-link chapter-link-previous" href={previous}>
        <span aria-hidden="true">←</span> Previous
      </a>
      <span className="chapter-progress">{current} <span>/ 05</span></span>
      <a className="chapter-link chapter-link-next" href={next}>
        {isLast ? "Start again" : "Continue"}
        <span aria-hidden="true">{isLast ? " ↺" : " →"}</span>
      </a>
    </nav>
  );
}

function FinalTribute() {
  return (
    <div className="tribute-chapters">
      <section className="tribute-page impact-page" id="teachers-shape-futures">
        <div className="chapter-content impact-content">
          {["BEHIND EVERY DREAM", "BEHIND EVERY ACHIEVEMENT", "BEHIND EVERY SUCCESS"].map((line, index) => (
            <motion.h1
              className="impact-line"
              key={line}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.14 }}
            >
              {line}
            </motion.h1>
          ))}
          <motion.h2
            className="gold"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            THERE WAS A TEACHER
          </motion.h2>
          <div className="impact-mark" aria-hidden="true">✦</div>
        </div>
        <ChapterNavigation previous="#learning-everywhere" next="#dedication" current="04" />
      </section>

      <section className="tribute-page final" id="dedication">
        <div className="chapter-content dedication-content">
          <motion.div
            className="final-badge"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            This Tribute Is Dedicated
          </motion.div>
          <motion.h1
            className="happy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            HAPPY TEACHERS' DAY <span aria-label="love">♥</span>
          </motion.h1>
          <div className="tribute">
            {credits.map((credit, index) => (
              <motion.p
                key={credit}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.25 + index * 0.1 }}
              >
                {credit}
              </motion.p>
            ))}
          </div>
          <p className="creator-credit">
            Made by Worshmeena Qayoumi · Frontend Developer
          </p>
        </div>
        <ChapterNavigation previous="#teachers-shape-futures" next="#tribute-lessons" current="05" isLast />
      </section>
    </div>
  );
}

export default FinalTribute;