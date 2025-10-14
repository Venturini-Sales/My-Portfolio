/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faDownload,
  faEnvelope,
  faEnvelopeOpen,
  faFolderClosed,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiHtml5,
  SiCss3,
  SiMysql,
} from "react-icons/si";
import {
  BentoCard,
  BentoContainer,
  BentoTitle,
  FileButton,
  ExpandedOverlay,
  CloseButton,
} from "./styles";
import { CursorContext } from "../../Contexts/ContextCursor";
import { WelcomeSection } from "../Sections/WelcomeSection/WelcomeSection";
import { AboutMeSection } from "../Sections/AboutMeSection/AboutMeSection";
import { ProjectSection } from "../Sections/ProjectSection/ProjectSection";
import { ContactSection } from "../Sections/ContactSection/ContactSection";
import { SkillsSection } from "../Sections/SkillsSection/SkillsSection";

export const BentoGrid = () => {
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const [circleCenter, setCircleCenter] = useState({ x: "50vw", y: "50vh" });

  const { ToggleCursorHover } = useContext(CursorContext);

  const icons = [
    <SiReact size={80} color="currentColor" />,
    <SiJavascript size={80} color="currentColor" />,
    <SiTypescript size={80} color="currentColor" />,
    <SiSass size={80} color="currentColor" />,
    <SiHtml5 size={80} color="currentColor" />,
    <SiCss3 size={80} color="currentColor" />,
    <SiMysql size={80} color="currentColor" />,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [icons.length]);

  const expandVariants = (x, y) => ({
    initial: {
      clipPath: `circle(10px at ${x} ${y})`,
      opacity: 1,
    },
    expand: {
      clipPath: `circle(2000px at ${x} ${y})`,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 20,
      },
    },
    exit: {
      clipPath: `circle(10px at ${x} ${y})`,
      opacity: 1,
      transition: { duration: 0.35 },
    },
  });

  const handleCardClick = (event, cardName) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const centerX = Math.round(rect.left + rect.width / 2);
    const centerY = Math.round(rect.top + rect.height / 2);

    setCircleCenter({ x: `${centerX}px`, y: `${centerY}px` });
    setActiveCard(cardName);
  };

  return (
    <>
      <BentoContainer>
        <BentoCard
          onClick={(e) => handleCardClick(e, "welcome")}
          onMouseOver={ToggleCursorHover}
          onMouseOut={ToggleCursorHover}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
          className="card1"
          initial={{ y: "-5vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        >
          <BentoTitle>Bem Vindo</BentoTitle>
        </BentoCard>

        <BentoCard
          onClick={(e) => handleCardClick(e, "about")}
          onMouseOver={ToggleCursorHover}
          onMouseOut={ToggleCursorHover}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          className="card2"
          initial={{ x: "-5vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        >
          <BentoTitle>Sobre Mim</BentoTitle>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              style={{ display: "inline-block" }}
              animate={{ x: ["0%", "100%", "-100%", "0%"] }}
              transition={{
                duration: 0.5,
                ease: [0.5, 0.8, 1, 1],
                times: [0, 0.4, 0.4, 1],
                repeat: Infinity,
                repeatDelay: 0.6,
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </motion.div>
          </div>
        </BentoCard>

        <BentoCard
          onClick={(e) => handleCardClick(e, "projects")}
          onMouseOver={ToggleCursorHover}
          onMouseOut={ToggleCursorHover}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
          className="card3"
          onMouseEnter={() => setIsProjectHovered(true)}
          onMouseLeave={() => setIsProjectHovered(false)}
          initial={{ x: "5vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        >
          <FontAwesomeIcon
            icon={isProjectHovered ? faFolderOpen : faFolderClosed}
            size="7x"
          />
          <BentoTitle>Projetos</BentoTitle>
        </BentoCard>

        <BentoCard
          onClick={(e) => handleCardClick(e, "contact")}
          onMouseOver={ToggleCursorHover}
          onMouseOut={ToggleCursorHover}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
          className="card4"
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => setIsContactHovered(false)}
          initial={{ x: "-5vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        >
          <BentoTitle>
            <FontAwesomeIcon
              icon={isContactHovered ? faEnvelopeOpen : faEnvelope}
              size="4x"
            />
          </BentoTitle>
        </BentoCard>

        <BentoCard
          onClick={(e) => handleCardClick(e, "skills")}
          onMouseOver={ToggleCursorHover}
          onMouseOut={ToggleCursorHover}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
          className="card5"
          initial={{ y: "5vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        >
          <BentoTitle>Skills</BentoTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              pointerEvents: "none",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {icons[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </BentoCard>

        <BentoCard
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
          className="card6"
          initial={{ x: "5vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        >
          <FileButton>
            <BentoTitle>Baixar CV</BentoTitle>
            <FontAwesomeIcon icon={faDownload} size="2x" />
          </FileButton>
        </BentoCard>
      </BentoContainer>

      <AnimatePresence>
        {activeCard && (
          <ExpandedOverlay
            key={activeCard}
            variants={expandVariants(circleCenter.x, circleCenter.y)}
            initial="initial"
            animate="expand"
            exit="exit"
          >
            {activeCard === "welcome" && <WelcomeSection />}
            {activeCard === "about" && <AboutMeSection />}
            {activeCard === "projects" && <ProjectSection />}
            {activeCard === "contact" && <ContactSection />}
            {activeCard === "skills" && <SkillsSection />}

            <CloseButton
              onClick={() => {
                setActiveCard(null);
              }}
            >
              ×
            </CloseButton>
          </ExpandedOverlay>
        )}
      </AnimatePresence>
    </>
  );
};
