import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  CardActionArea,
} from "@mui/material";
import { tratmentsData } from "../data/imagesData";
import CardMedia from "@mui/material/CardMedia";

export const Tratment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ebebeb",
        minHeight: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      id='tratament'
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "20px", color: "#688293", textTransform: "uppercase" ,"@media (max-width: 768px)": {
         marginBottom:6
        },}}
      >
        Conheça os <b>nossos tratamentos</b>
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: 1,
          height: "50vh",
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width: 768px)": {
            gap:6,
            height:'auto',
            flexDirection: "column",
            alignItems:'center',
            "& .card": {
              width: '90%',
            height:'100%%',
            },
          },
        }}
      >
        {tratmentsData.map(({ image, description, title }) => (
          <Card
            sx={{
              flex: "0 0 auto",
              width: 250,
              margin: 1,
              overflow: "visible",
              display: "flex",
              height: 250,
            }}
            className="card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
                sx={{
                  position: "absolute",
                  top: "-50px",
                  left: 0,
                  right: 0,
                  margin: "auto",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "5px solid #f2f2f2",
                  backgroundColor: "white",
                
                }}
              
              className="cardMedia"/>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#a09c9c" }}
                >
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
