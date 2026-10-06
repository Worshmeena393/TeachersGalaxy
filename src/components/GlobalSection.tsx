import { motion } from "framer-motion";

const regions = [
  "کشورها",
  "قاره‌ها",
  "منطقه‌های زمانی",
  "صفحه‌های نمایش",
  "صنف‌ها",
];

const lessons = [
  "برخی درس‌ها در صنف آموخته شدند.",
  "برخی آنلاین.",
  "برخی با سخن.",
  "و برخی با الگو بودن استادان.",
];

function dariNumber(value: number) {
  return String(value)
    .padStart(2, "0")
    .replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}

function GlobalSection() {
  return (
    <>
      <section className="education-section" id="chapter-three">
        <motion.div
          className="education-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">فصل سوم · فراتر از مرزها</span>
          <h2>دانش، مرز نمی‌شناسد.</h2>
          <div className="border-lines">
            <p>دانش از صنف‌ها گذشت.</p>
            <p>از کشورها گذشت.</p>
            <p>از صفحه‌های نمایش گذشت.</p>
            <p className="border-finale">اما آموزش هرگز متوقف نشد.</p>
          </div>
          <div className="world-reaches" aria-label="گسترهٔ آموزش">
            {regions.map((region, index) => (
              <motion.span
                key={region}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                {region}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <div className="education-aside" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit-core">دانش<br />همه‌جا</span>
        </div>
      </section>

      <section className="connection-section" id="chapter-four">
        <div className="connection-heading">
          <span className="eyebrow">فصل چهارم · درس‌هایی برای زندگی</span>
          <h2>درس‌هایی که زندگی را ساختند</h2>
          <p>آموخته‌هایی که با ما ماندند و راه فردا را نشان دادند.</p>
        </div>
        <div className="connection-list">
          {lessons.map((lesson, index) => (
            <motion.div
              className="connection-item"
              key={lesson}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span className="connection-number">{dariNumber(index + 1)}</span>
              <span>{lesson}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default GlobalSection;
``