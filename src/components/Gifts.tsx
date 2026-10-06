import { motion } from "framer-motion";

const journeyBeats = [
  {
    phase: "چالش",
    title: "هر پاسخ، آسان به دست نمی‌آید.",
    text: "هنگامی که راه دشوار شد، استادان به ما آموختند که کوشش بخشی از یادگیری است.",
  },
  {
    phase: "رشد",
    title: "گام‌به‌گام نیرومندتر شدیم.",
    text: "با تمرین، صبر و دل‌گرمی استادان، تردید جای خود را به اعتماد و پیشرفت داد.",
  },
  {
    phase: "موفقیت",
    title: "روزی بر پای خود ایستادیم.",
    text: "در هر دست‌آورد، نشانی از راهنمایی کسانی هست که به توانایی ما باور داشتند.",
  },
  {
    phase: "سپاس‌گزاری",
    title: "اثر نیکی استاد باقی می‌ماند.",
    text: "پس از پایان درس نیز، مهربانی و آموخته‌های استاد در انتخاب‌ها و آرزوهای ما زنده است.",
  }
];

function Gifts() {
  return (
    <section className="journey-section" id="story-moments">
      <div className="journey-heading">
        <span className="eyebrow">فصل نخست و دوم · آغاز و راهنمایی</span>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          هر درس، <em>آینده‌ای را ساخت.</em>
        </motion.h2>
        <p>آینده از یک درس آغاز می‌شود و با راهنمایی استادان روشن‌تر می‌گردد.</p>
      </div>

      <div className="chapter-pair">
        <motion.article
          className="chapter-card chapter-card-first"
          id="chapter-one"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="chapter-number">فصل ۰۱</span>
          <h3>آغاز یک سفر</h3>
          <p>هر آینده‌ای از یک درس آغاز می‌شود.</p>
        </motion.article>
        <motion.article
          className="chapter-card chapter-card-guidance"
          id="chapter-two"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <span className="chapter-number">فصل ۰۲</span>
          <h3>استادان چراغ راه بودند</h3>
          <p>در هر مرحله از یادگیری، استادان راه را روشن کردند.</p>
        </motion.article>
      </div>

      <ol className="journey-track">
        {journeyBeats.map((moment, index) => (
          <motion.li
            className="journey-step"
            key={moment.phase}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
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