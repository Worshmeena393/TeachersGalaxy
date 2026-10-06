import { useEffect, useState } from "react";
import "./story.css";
import Hero from "./components/Hero";
import Gifts from "./components/Gifts";
import GlobalSection from "./components/GlobalSection";
import FinalTribute from "./components/FinalTribute";

const chapterIds = new Set([
  "story-moments",
  "education-never-stopped",
  "learning-everywhere",
  "success-story",
  "source-code",
  "dedication",
]);

function App() {
  const [started, setStarted] = useState(() =>
    chapterIds.has(window.location.hash.slice(1)),
  );

  useEffect(() => {
    if (!started) {
      return;
    }

    const chapter = document.getElementById(window.location.hash.slice(1));
    chapter?.scrollIntoView({ block: "start" });
  }, [started]);

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