import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
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
    image: "src/assets/Images/icon.png",
    alt: "Imagem da Página",
  },
  {
    title: "Tríade",
    description:
      "Este site foi desenvolvido como um projeto freelance e entregue em uma semana. Trata-se de um site de apresentação construído em React, utilizando bibliotecas como FramerMotion, FontAwesome e Styled Components. Este projeto marcou meu primeiro trabalho como freelancer, onde fui responsável por todo o design, exceto pela escolha das paletas de cores. O objetivo principal do site é fornecer uma plataforma visualmente atraente e funcional para a apresentação de informações, com componentes reutilizáveis e animações interativas que melhoram a experiência do usuário. A atenção aos detalhes no design e na implementação técnica resultou em um site que atende às necessidades do cliente e demonstra um alto nível de profissionalismo e competência técnica.",
    image: "src/assets/Images/icon.png",
    alt: "Imagem da Página",
  },
  {
    title: "AeroWave",
    description:
      "Este site foi desenvolvido como um projeto freelance e entregue em uma semana. Trata-se de um site de apresentação construído em React, utilizando bibliotecas como FramerMotion, FontAwesome e Styled Components. Este projeto marcou meu primeiro trabalho como freelancer, onde fui responsável por todo o design, exceto pela escolha das paletas de cores. O objetivo principal do site é fornecer uma plataforma visualmente atraente e funcional para a apresentação de informações, com componentes reutilizáveis e animações interativas que melhoram a experiência do usuário. A atenção aos detalhes no design e na implementação técnica resultou em um site que atende às necessidades do cliente e demonstra um alto nível de profissionalismo e competência técnica.",
    image: "src/assets/Images/icon.png",
    alt: "Imagem da Página",
  },
];

export const Slider = () => {
  return (
    <SliderWrapper>
      <Swiper
        modules={[Mousewheel, Pagination]}
        direction="vertical"
        speed={800}
        loop={true}
        pagination={{ clickable: true }}
        mousewheel={{ thresholdDelta: 50, sensitivity: 1 }}
        style={{ width: "100%", height: "100%" }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderContainer>
              <Info>
                <Title>{slide.title}</Title>
                <Description>{slide.description}</Description>
              </Info>
              <Item>
                <ItemImage src={slide.image} alt={slide.alt} />
              </Item>
            </SliderContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};
