import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as LinkScroll } from 'react-scroll';
import '../components/App.css';
import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap', 
      }}
    >
      <Box>
        <img id="logo" src={Logo} alt="Logo" />
      </Box>
      <nav className='menu-desktop'>
        <ul style={{ display: 'flex', alignItems: 'center' }}>
          <li style={{ cursor: 'pointer', marginRight: '20px' }}>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color="inherit"
              underline="none"
            >
              <Typography variant="button">Quem Somos</Typography>
            </LinkScroll>
          </li>
          <li style={{ cursor: 'pointer', marginRight: '20px' }}>
            <LinkScroll
              activeClass="active"
              to="tratament"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color="inherit"
              underline="none"
            >
              <Typography variant="button">Tratamentos</Typography>
            </LinkScroll>
          </li>
        </ul>
        <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
          <li style={{ cursor: 'pointer' }}>
            <LinkScroll
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color="inherit"
              underline="none"
            >
              <Typography variant="button">Contatos</Typography>
            </LinkScroll>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

export default Header;
