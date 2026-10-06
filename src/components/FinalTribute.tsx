import { motion } from "framer-motion";

const codeLines = [
  { expression: "future = {}" },
  { key: "دانش", value: "استادان" },
  { key: "اعتماد_به_نفس", value: "راهنمایی" },
  { key: "موفقیت", value: "تلاش" },
  { key: "الهام", value: "معلمان" },
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
        <div className="success-words" aria-label="هر آرزو، هر دست‌آورد و هر موفقیت با راهنمایی یک استاد همراه بود.">
          {["پشت هر آرزو،", "پشت هر دست‌آورد،", "پشت هر موفقیت،", "استادی ایستاده بود."].map((line, index) => (
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

      <section className="source-section" id="chapter-five">
        <div className="source-intro">
          <span className="eyebrow">فصل پنجم · منبع آینده من</span>
          <h2>کد منبع آینده من</h2>
        </div>
        <motion.pre
          className="source-window"
          dir="ltr"
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
                key={`${line.expression ?? line.key}`}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.3 + index * 0.28 }}
                dir="ltr"
              >
                {line.expression ? line.expression : (
                  <>
                    future[&quot;<span className="code-string"><bdi lang="fa-AF" dir="rtl">{line.key}</bdi></span>&quot;] = &quot;<span className="code-string"><bdi lang="fa-AF" dir="rtl">{line.value}</bdi></span>&quot;
                  </>
                )}
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
          هر خط از آیندهٔ من،<br />
          با آموزش، صبر و الهام استادان نوشته شده است.
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
          <span className="ending-kicker">با سپاس و احترام، همیشه</span>
          <h2>روز معلم مبارک</h2>
          <p>به تمام استادانی که پیش از آن‌که شاگرد به خود باور داشته باشد، به او باور داشتند.</p>
          <span className="ending-signature">وریښمینه قیومی</span>
        </motion.div>
      </section>
    </>
  );
}

export default FinalTribute;