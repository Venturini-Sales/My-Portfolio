import React, { useContext, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiStyledcomponents,
  SiAxios,
  SiMui,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandFramerMotion } from "react-icons/tb";

import {
  HardSkillsArea,
  HardSkillsButtons,
  HardSkillsButtonsArea,
  HardSkillsDescription,
  HardSkillsGrid,
  HardSkillsHeader,
  HardSkillsSelector,
  HardSkillsText,
  HardSkillsTitle,
  SkillsSectionContainer,
} from "./styles";

import stacksText from "../../../data/stack.json";
import ParallaxText from "../../ParallaxText/ParallaxText";
import { CursorContext } from "../../../Contexts/ContextCursor";

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSkill, setSelectedSkill] = useState("html");
  const { ToggleCursorHover } = useContext(CursorContext);

  const [skillsRef] = useAutoAnimate({
    duration: 250,
    easing: "ease-in-out",
  });

  const cardVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeIn",
      },
    },
  };

  const HardSkills = [
    {
      keyname: "html",
      title: "Html",
      icon: <SiHtml5 size={25} color="#f36a1f" />,
      category: "Linguagem",
    },
    {
      keyname: "css",
      title: "Css",
      icon: <SiCss3 size={25} color="#3d9dd7" />,
      category: "Linguagem",
    },
    {
      keyname: "javascript",
      title: "Javascript",
      icon: <SiJavascript size={25} color="#f0dc55" />,
      category: "Linguagem",
    },
    {
      keyname: "typescript",
      title: "Typescript",
      icon: <SiTypescript size={25} color="#2d79c7" />,
      category: "Linguagem",
    },
    {
      keyname: "sass",
      title: "Sass",
      icon: <SiSass size={25} color="#cf6b9c" />,
      category: "Linguagem",
    },

    {
      keyname: "react",
      title: "ReactJS",
      icon: <SiReact size={25} color="#61dbfb" />,
      category: "Framework",
    },
    {
      keyname: "tailwind",
      title: "Tailwind Css",
      icon: <SiTailwindcss size={25} color="#3ebff8" />,
      category: "Framework",
    },

    {
      keyname: "styledcomponents",
      title: "Styled Components",
      icon: <SiStyledcomponents size={25} color="#a274bc" />,
      category: "Biblioteca",
    },
    {
      keyname: "axios",
      title: "Axios",
      icon: <SiAxios size={25} color="#5f30e5" />,
      category: "Biblioteca",
    },
    {
      keyname: "materialui",
      title: "Material UI",
      icon: <SiMui size={25} color="#3399ff" />,
      category: "Biblioteca",
    },
    {
      keyname: "framermotion",
      title: "Framer Motion",
      icon: <TbBrandFramerMotion size={25} color="#ffeb0e" />,
      category: "Biblioteca",
    },

    {
      keyname: "vscode",
      title: "VsCode",
      icon: <VscVscode size={25} color="#3B82F6" />,
      category: "Ferramenta",
    },
    {
      keyname: "git",
      title: "Git",
      icon: <SiGit size={25} color="#f05639" />,
      category: "Ferramenta",
    },
    {
      keyname: "mysql",
      title: "MySQL",
      icon: <SiMysql size={25} color="#087993" />,
      category: "Ferramenta",
    },
  ];

  const visibleSkills =
    selectedCategory === "Todos"
      ? HardSkills
      : HardSkills.filter((skill) => skill.category === selectedCategory);

  const selectedData = stacksText[selectedSkill];

  return (
    <SkillsSectionContainer>
      <HardSkillsArea>
        <HardSkillsHeader>
          <HardSkillsSelector>
            {[
              "Todos",
              "Framework",
              "Linguagem",
              "Ferramenta",
              "Biblioteca",
            ].map((cat) => (
              <li
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
                onMouseOver={ToggleCursorHover}
                onMouseOut={ToggleCursorHover}
              >
                {cat === "Framework"
                  ? "Frameworks"
                  : `${cat}s`.replace("Todoss", "Todos")}
              </li>
            ))}
          </HardSkillsSelector>

          <HardSkillsButtonsArea ref={skillsRef}>
            <HardSkillsGrid key={selectedCategory}>
              {visibleSkills.map((skill) => (
                <HardSkillsButtons
                  key={skill.keyname}
                  className={selectedSkill === skill.keyname ? "active" : ""}
                  onClick={() => setSelectedSkill(skill.keyname)}
                  onMouseOver={ToggleCursorHover}
                  onMouseOut={ToggleCursorHover}
                >
                  {skill.icon}
                  <p>{skill.title}</p>
                </HardSkillsButtons>
              ))}
            </HardSkillsGrid>
          </HardSkillsButtonsArea>
        </HardSkillsHeader>

        <AnimatePresence mode="wait">
          <HardSkillsDescription
            as={motion.div}
            key={selectedSkill}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <HardSkillsTitle>
              {selectedData?.title || selectedData?.classNames}
            </HardSkillsTitle>

            <HardSkillsText>{selectedData?.description}</HardSkillsText>
          </HardSkillsDescription>
        </AnimatePresence>
      </HardSkillsArea>

      <ParallaxText />
    </SkillsSectionContainer>
  );
};
