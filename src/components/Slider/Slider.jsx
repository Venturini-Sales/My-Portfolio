/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import {
  Description,
  Info,
  Item,
  ItemImage,
  SliderContainer,
  SliderWrapper,
  Title,
} from "./Styles";

const slidesData = [
  {
    title: "Exclusive",
    description:
      "Este site foi desenvolvido como um projeto freelance e entregue em uma semana. Trata-se de um site de apresentação construído em React, utilizando bibliotecas como FramerMotion, FontAwesome e Styled Components. Este projeto marcou meu primeiro trabalho como freelancer, onde fui responsável por todo o design, exceto pela escolha das paletas de cores. O objetivo principal do site é fornecer uma plataforma visualmente atraente e funcional para a apresentação de informações, com componentes reutilizáveis e animações interativas que melhoram a experiência do usuário. A atenção aos detalhes no design e na implementação técnica resultou em um site que atende às necessidades do cliente e demonstra um alto nível de profissionalismo e competência técnica.",
    image: "src/assets/Images/mockupaerowave.svg",
    alt: "Imagem da Página",
  },
  {
    title: "Tríade",
    description:
      "Este site foi desenvolvido como um projeto freelance e entregue em uma semana. Trata-se de um site de apresentação construído em React, utilizando bibliotecas como FramerMotion, FontAwesome e Styled Components. Este projeto marcou meu primeiro trabalho como freelancer, onde fui responsável por todo o design, exceto pela escolha das paletas de cores. O objetivo principal do site é fornecer uma plataforma visualmente atraente e funcional para a apresentação de informações, com componentes reutilizáveis e animações interativas que melhoram a experiência do usuário. A atenção aos detalhes no design e na implementação técnica resultou em um site que atende às necessidades do cliente e demonstra um alto nível de profissionalismo e competência técnica.",
    image: "src/assets/Images/mockupaerowave.svg",
    alt: "Imagem da Página",
  },
  {
    title: "AeroWave",
    description:
      "Este site foi desenvolvido como um projeto freelance e entregue em uma semana. Trata-se de um site de apresentação construído em React, utilizando bibliotecas como FramerMotion, FontAwesome e Styled Components. Este projeto marcou meu primeiro trabalho como freelancer, onde fui responsável por todo o design, exceto pela escolha das paletas de cores. O objetivo principal do site é fornecer uma plataforma visualmente atraente e funcional para a apresentação de informações, com componentes reutilizáveis e animações interativas que melhoram a experiência do usuário. A atenção aos detalhes no design e na implementação técnica resultou em um site que atende às necessidades do cliente e demonstra um alto nível de profissionalismo e competência técnica.",
    image: "src/assets/Images/mockupaerowave.svg",
    alt: "Imagem da Página",
  },
];

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };
  
  return (
    <SliderWrapper>
      <Swiper
        modules={[Mousewheel, Pagination]}
        direction="vertical"
        speed={800}
        loop={true}
        pagination={{ clickable: true }}
        mousewheel={{ thresholdDelta: 50, sensitivity: 1 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ width: "100%", height: "100%" }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderContainer>
              <Info>
                <motion.div
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  variants={fadeUp}
                  custom={0.7}
                >
                  <Title>{slide.title}</Title>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  variants={fadeUp}
                  custom={0.7}
                >
                  <Description>{slide.description}</Description>
                </motion.div>
              </Info>

              <Item>
                <motion.div
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  variants={fadeUp}
                  custom={0.7}
                >
                  <ItemImage src={slide.image} alt={slide.alt} />
                </motion.div>
              </Item>
            </SliderContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};
