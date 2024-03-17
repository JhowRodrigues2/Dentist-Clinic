import { Box, Typography, TextField, Button, Link } from "@mui/material";
import React from "react";
import Textarea from "@mui/joy/Textarea";

export const Contacts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
      id='contacts'
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "35%",
          gap: 1,
          height: "70vh",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "rgb(115, 115, 115)",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          Entre em contato com a gente
        </Typography>
        <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Nome"
            multiline
            maxRows={4}
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            maxRows={4}
            sx={{ width: "50%" }}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Telefone"
            multiline
            maxRows={4}
            sx={{ width: "50%" }}
          />
        </Box>
        <Textarea minRows={4} />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            href="#contained-buttons"
            sx={{
              background: "rgb(104, 130, 147)",
              width: 120,
              "&:hover": {
                backgroundColor: "rgb(80, 100, 120)",
              },
            }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          background: "rgb(104, 130, 147)",
          width: "100%",
          flex: 1,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "#fff",
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
            Telefone
          </Typography>
          <Typography
            sx={{ fontSize: "12px", letterSpacing: "2px", textAlign: "center" }}
          >
            (33) 3333-1234
          </Typography>
          <Typography
            sx={{ fontSize: "12px", letterSpacing: "2px", textAlign: "center" }}
          >
            (33) 1234-3333
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
            Endereço
          </Typography>
          <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
            Av. Getúlio Vargas, 291. Torre 1 Sala 103
          </Typography>
          <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
            Cep 88015300 - Florianópolis, SC. 8802001
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
            Horários
          </Typography>
          <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
            Segunda a Sexta
          </Typography>
          <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
            08:00 até 12:00
          </Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#576975", width:'100%',height:'5vh',display:'flex',alignItems:'center', justifyContent:'center' }}>
        <Link
          href="https://github.com/JhowRodrigues2"
          target={"_blank"}
          underline="none"
          color="#ffff"
        >
          Jhow Rodrigues © - 2024
        </Link>
      </Box>
    </Box>
  );
};
