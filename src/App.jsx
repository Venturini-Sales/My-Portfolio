import { BentoGrid } from "./components/BentoGrid/BentoGrid";
import Cursor from "./components/Cursor/Cursor";
import { WelcomeSection } from "./components/Sections/WelcomeSection/WelcomeSection";
import { AboutMeSection } from "./components/Sections/AboutMeSection/AboutMeSection";
import { ProjectSection } from "./components/Sections/ProjectSection/ProjectSection";
import { ContactSection } from "./components/Sections/ContactSection/ContactSection";
import { SkillsSection } from "./components/Sections/SkillsSection/SkillsSection";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Cursor />
      <BentoGrid />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
