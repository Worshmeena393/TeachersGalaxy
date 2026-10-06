import { motion } from "framer-motion";

const codeLines = [
  'future = {}',
  'future["knowledge"] = "Teachers"',
  'future["confidence"] = "Guidance"',
  'future["success"] = "Dedication"',
];

const particles = [
  [5, 18], [11, 72], [17, 42], [23, 88], [29, 24], [35, 63],
  [41, 12], [47, 78], [53, 34], [59, 91], [65, 16], [71, 57],
  [77, 29], [83, 83], [89, 46], [95, 68], [14, 95], [74, 8],
];

function FinalTribute() {
  return (
    <>
      <section className="success-section" id="success-story">
        <div className="success-words" aria-label="Behind every dream, achievement, and success, there was a teacher.">
          {["Behind every dream.", "Behind every achievement.", "Behind every success.", "There was a teacher."].map((line, index) => (
            <motion.p
              className={index === 3 ? "success-reveal" : "success-line"}
              key={line}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </section>

      <section className="source-section" id="source-code">
        <div className="source-intro">
          <span className="eyebrow">A little gratitude, written in code</span>
          <h2>Source Code Of My Future</h2>
        </div>
        <motion.pre
          className="source-window"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
          <code>
            {codeLines.map((line, index) => (
              <motion.span
                className="source-line"
                key={line}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.3 + index * 0.28 }}
              >
                {line}
              </motion.span>
            ))}
          </code>
        </motion.pre>
        <motion.p
          className="source-reveal"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Every line of my future was inspired by my teachers.
        </motion.p>
      </section>

      <section className="cinematic-ending" id="dedication">
        <div className="particle-field" aria-hidden="true">
          {particles.map(([left, top], index) => (
            <span
              className="particle"
              key={`${left}-${top}`}
              style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${-(index % 7) * 0.8}s` }}
            />
          ))}
        </div>
        <motion.div
          className="ending-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
        >
          <span className="ending-kicker">With gratitude, always</span>
          <h2>Happy Teachers Day</h2>
          <p>To every teacher who believed in a student before the student believed in themselves.</p>
          <span className="ending-signature">Worshmeena Qayoumi</span>
        </motion.div>
      </section>
    </>
  );
}

export default FinalTribute;