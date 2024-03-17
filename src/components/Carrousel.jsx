import React, { useState,useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box,Fade } from "@mui/material";
import { itemData,itemData2 } from "../data/imagesData";
export const Carrousel = () => {
    const[images,setImages]=useState(itemData)
   
    const changeImages = () => {
        setImages((prevImages) => (prevImages === itemData ? itemData2 : itemData));
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          changeImages();
        }, 4000);
    
        return () => clearInterval(interval);
      }, [itemData, itemData2]);

  return (
<Box sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <Fade in={true} timeout={1000}>
        <ImageList sx={{ width: '70%', margin: 'auto' }} cols={5} rows={2}>
          {images.map((item, index) => (
            <Fade key={index} in={true} timeout={1000}>
              <ImageListItem>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            </Fade>
          ))}
        </ImageList>
      </Fade>
    </Box>

  
  );
};
