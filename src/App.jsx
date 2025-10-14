import { BentoGrid } from "./components/BentoGrid/BentoGrid";
import Cursor from "./components/Cursor/Cursor";
import { WelcomeSection } from "./components/Sections/WelcomeSection/WelcomeSection";
import { AboutMeSection } from "./components/Sections/AboutMeSection/AboutMeSection";
import { ProjectSection } from "./components/Sections/ProjectSection/ProjectSection";
import { ContactSection } from "./components/Sections/ContactSection/ContactSection";
import { SkillsSection } from "./components/Sections/SkillsSection/SkillsSection";

function App() {
  return (
    <>
      <Cursor />
      <BentoGrid />
    </>
  );
}

export default App;
