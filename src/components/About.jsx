import { Box, Typography } from "@mui/material";
import React from "react";
export const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        p: 0,
        m: 0,
        gap: 2,
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        alignItems: "center",
      }}
      id='about'
    >
      <Box
        sx={{
          display: "flex",
          height: "50vh",
          minWidth: "80%",
          gap: 3,
          padding: 4,
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              alignItems:'center'
            },
          }}
        >
          <img
            src="https://img.freepik.com/fotos-premium/um-dentista-esta-examinando-a-ia-generativa-da-boca-de-uma-crianca_549702-8811.jpg"
            alt=""
            style={{
              width: "40%",
              height: "80%",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
          <Typography
            sx={{
              color: "rgb(160, 156, 156)",
              fontFamily: "Montserrat, sans-serif",
              width: "50%",
              padding: "0 16px",
              "@media (max-width: 850px)": {
                width: "100%",
                fontSize: 13,
              },
            }}
          >
            <Typography
              sx={{ color: "rgb(104, 130, 147)", fontWeight: "bold" }}
            >
              Conheça o Dr. Maria Rita
            </Typography>
            Uma dentista dedicada e apaixonada por cuidar do sorriso dos seus
            pacientes. Com anos de experiência e um talento excepcional,
            oferecendo um atendimento de qualidade, visando sempre o conforto e
            bem-estar de cada pessoa que entra em seu consultório. Seja para um
            simples check-up ou para tratamentos mais complexos, como implantes
            dentários e ortodontia. Agende sua consulta hoje mesmo e descubra
            como a Dra. pode transformar seu sorriso e sua vida. Seu sorriso
            merece o melhor cuidado, e a Dra. Maria Rita é a profissional ideal
            para isso. Com uma abordagem personalizada, ela valoriza cada
            detalhe estético e funcional, trabalhando para proporcionar
            resultados duradouros e naturais. Além disso, se mantém atualizada
            com as mais recentes pesquisas e avanços na odontologia, garantindo
            que seus pacientes recebam o tratamento mais eficaz e moderno
            disponível. Não adie mais a saúde do seu sorriso, agende uma
            consulta com a gente e descubra o poder de um sorriso saudável e
            radiante.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flex: 1,
          gap: 1,
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width: 850px)": {
            flexDirection: "column",
            "& iframe": {
             display:'none'
            },
          },
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wrdEE8Br7Zk?si=h2xK8p_XAsaWGjY9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_ZPW2P7qVAY?si=qPoc0PYOz4ITsbPQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nSdz6ShV4iA?si=ciNoatIaGx2M5sHV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Box>
    </Box>
  );
};
