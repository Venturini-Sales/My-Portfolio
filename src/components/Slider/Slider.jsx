/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import ExclusiveImage from "../../assets/Images/mockupexclusive.png";
import TriadeImage from "../../assets/Images/mockuptriade.png";
import AerowaveImage from "../../assets/Images/mockupaerowave.png";
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
      "Exclusive se trata de um e-commerce completo desenvolvido em React com o objetivo de simular uma loja virtual moderna de forma realista. O projeto consome a API do DummyJson, exibindo produtos separados por categorias, além de simular promoções, também contando com um sistema de cadastro e login, armazenando nome de usuário, produtos na lista de desejo, carrinho de compras no LocalStorage e possuindo um sistema de compra integrado com o Paypal, permitindo pagamentos por cartão. A arquitetura do projeto foi bem organizada através da componentização, bibliotecas e padrões de design, utilizando ferramentas como o Styled Components, Custom Hooks e Material UI, sendo um exercício que aprimorou minhas habilidades de organização de código, design e lógica.",
    image: ExclusiveImage,
    alt: "Imagem da Página",
  },
  {
    title: "Tríade Gestão Contábil",
    description:
      "Este site foi criado como um projeto freelance e concluído em uma semana. Este site foi construído em React, utilizando bibliotecas como FramerMotion, FontAwesome e Styled Components. Este projeto marcou meu primeiro trabalho como freelancer, em que fui responsável por todo o design, exceto pela escolha das paletas de cores. O objetivo principal do site é fornecer uma plataforma visualmente atraente e funcional para a apresentação de informações, com componentes reutilizáveis e animações interativas que melhoram a experiência do usuário. A atenção aos detalhes no design e na implementação técnica resultou em um site que atende às necessidades do cliente e demonstra um alto nível de profissionalismo e competência técnica.",
    image: TriadeImage,
    alt: "Imagem da Página",
  },
  {
    title: "AeroWave",
    description:
      "O projeto Aerowave foi construído com o intuito de simular um site de venda de discos com a estética dos anos 90, referenciando a interface do Windows 98. Feito em React, possui funcionalidades como rotas dinâmicas, componentização, sistema de login e cadastro, sistema de contato integrado ao EmailJS, além do sistema de exibição de produtos com fotos e nomes dos discos junto das prévias de áudio dos álbuns.",
    image: AerowaveImage,
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
