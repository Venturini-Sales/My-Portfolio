import React, { useContext, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
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

import ParallaxText from "../../ParallaxText/ParallaxText";
import { CursorContext } from "../../../Contexts/ContextCursor";

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const { ToggleCursorHover } = useContext(CursorContext);

  const [skillsRef] = useAutoAnimate({
    duration: 250,
    easing: "ease-in-out",
    animation: (el, action) => {
      if (action === "add") {
        el.animate(
          [
            { opacity: 0, transform: "translateY(6px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 200, easing: "ease-out" }
        );
      }

      if (action === "remove") {
        el.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 150,
          easing: "ease-in",
        });
      }
    },
  });

  const HardSkills = [
    {
      title: "Html",
      icon: <SiHtml5 size={25} color="#f36a1f" />,
      category: "Linguagem",
    },
    {
      title: "Css",
      icon: <SiCss3 size={25} color="#3d9dd7" />,
      category: "Linguagem",
    },
    {
      title: "Javascript",
      icon: <SiJavascript size={25} color="#f0dc55" />,
      category: "Linguagem",
    },
    {
      title: "Typescript",
      icon: <SiTypescript size={25} color="#2d79c7" />,
      category: "Linguagem",
    },
    {
      title: "Sass",
      icon: <SiSass size={25} color="#cf6b9c" />,
      category: "Linguagem",
    },

    {
      title: "ReactJS",
      icon: <SiReact size={25} color="#61dbfb" />,
      category: "Framework",
    },
    {
      title: "Tailwind Css",
      icon: <SiTailwindcss size={25} color="#3ebff8" />,
      category: "Framework",
    },

    {
      title: "Styled Components",
      icon: <SiStyledcomponents size={25} color="#a274bc" />,
      category: "Biblioteca",
    },
    {
      title: "Axios",
      icon: <SiAxios size={25} color="#5f30e5" />,
      category: "Biblioteca",
    },
    {
      title: "Material UI",
      icon: <SiMui size={25} color="#3399ff" />,
      category: "Biblioteca",
    },
    {
      title: "Framer Motion",
      icon: <TbBrandFramerMotion size={25} color="#ffeb0e" />,
      category: "Biblioteca",
    },

    {
      title: "VsCode",
      icon: <VscVscode size={25} color="#3B82F6" />,
      category: "Ferramenta",
    },
    {
      title: "Git",
      icon: <SiGit size={25} color="#f05639" />,
      category: "Ferramenta",
    },
    {
      title: "MySQL",
      icon: <SiMysql size={25} color="#087993" />,
      category: "Ferramenta",
    },
  ];

  const visibleSkills =
    selectedCategory === "Todos"
      ? HardSkills
      : HardSkills.filter((skill) => skill.category === selectedCategory);

  return (
    <SkillsSectionContainer>
      <HardSkillsArea>
        <HardSkillsHeader>
          <HardSkillsSelector>
            <li
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
              className={selectedCategory === "Todos" ? "active" : ""}
              onClick={() => setSelectedCategory("Todos")}
            >
              Todos
            </li>
            <li
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
              className={selectedCategory === "Framework" ? "active" : ""}
              onClick={() => setSelectedCategory("Framework")}
            >
              Frameworks
            </li>
            <li
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
              className={selectedCategory === "Linguagem" ? "active" : ""}
              onClick={() => setSelectedCategory("Linguagem")}
            >
              Linguagens
            </li>
            <li
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
              className={selectedCategory === "Ferramenta" ? "active" : ""}
              onClick={() => setSelectedCategory("Ferramenta")}
            >
              Ferramentas
            </li>
            <li
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
              className={selectedCategory === "Biblioteca" ? "active" : ""}
              onClick={() => setSelectedCategory("Biblioteca")}
            >
              Bibliotecas
            </li>
          </HardSkillsSelector>

          <HardSkillsButtonsArea ref={skillsRef}>
            <HardSkillsGrid key={selectedCategory}>
              {visibleSkills.map((skill) => (
                <HardSkillsButtons
                  onMouseOver={ToggleCursorHover}
                  onMouseOut={ToggleCursorHover}
                  key={skill.title}
                >
                  {skill.icon}
                  <p>{skill.title}</p>
                </HardSkillsButtons>
              ))}
            </HardSkillsGrid>
          </HardSkillsButtonsArea>
        </HardSkillsHeader>
        <HardSkillsDescription>
          <HardSkillsTitle>Testando</HardSkillsTitle>
          <HardSkillsText>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium
            tellus duis convallis tempus leo eu aenean. Iaculis massa nisl
            malesuada lacinia integer nunc posuere. Conubia nostra inceptos
            himenaeos orci varius natoque penatibus. Nulla molestie mattis
            scelerisque maximus eget fermentum odio. Blandit quis suspendisse
            aliquet nisi sodales consequat magna. Ligula congue sollicitudin
            erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam
            volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin
            libero feugiat tristique. Cubilia curae hac habitasse platea
            dictumst lorem ipsum. Sem placerat in id cursus mi pretium tellus.
            Fringilla lacus nec metus bibendum egestas iaculis massa. Taciti
            sociosqu ad litora torquent per conubia nostra. Ridiculus mus donec
            rhoncus eros lobortis nulla molestie. Mauris pharetra vestibulum
            fusce dictum risus blandit quis. Finibus facilisis dapibus etiam
            interdum tortor ligula congue. Justo lectus commodo augue dignissim
            velit aliquam. Primis vulputate ornare sagittis vehicula praesent
            dui felis. Senectus netus suscipit auctor curabitur facilisi cubilia
            curae. Quisque faucibus ex sapien vitae pellentesque sem placerat.
          </HardSkillsText>
        </HardSkillsDescription>
      </HardSkillsArea>

      <ParallaxText />
    </SkillsSectionContainer>
  );
};
