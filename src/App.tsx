import { useEffect, useState } from "react";
import "./dari.css";
import Hero from "./components/Hero";
import Gifts from "./components/Gifts";
import GlobalSection from "./components/GlobalSection";
import FinalTribute from "./components/FinalTribute";

const chapterIds = new Set([
  "story-moments",
  "chapter-one",
  "chapter-two",
  "chapter-three",
  "chapter-four",
  "success-story",
  "chapter-five",
  "dedication",
]);

function App() {
  const [started, setStarted] = useState(() =>
    chapterIds.has(window.location.hash.slice(1)),
  );

  useEffect(() => {
    document.documentElement.lang = "fa-AF";
    document.documentElement.dir = "rtl";

    if (!started) {
      return;
    }

    const chapter = document.getElementById(window.location.hash.slice(1));
    chapter?.scrollIntoView({ block: "start" });
  }, [started]);

  useEffect(() => {
    const trackPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", trackPointer, { passive: true });
    return () => window.removeEventListener("pointermove", trackPointer);
  }, []);

  if (!started) {
    return <Hero onStart={() => setStarted(true)} />;
  }

  return (
    <div className="app">
      <Gifts />
      <GlobalSection />
      <FinalTribute />
    </div>
  );
}

export default App;