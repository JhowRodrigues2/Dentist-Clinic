import { Box } from "@mui/material";
import Header from "./components/Header";
import "./components/App.css";
import { Carrousel } from "./components/Carrousel";
import { About } from "./components/About";
import { Tratment } from "./components/Tratment";
import { Contacts } from "./components/Contacts";
function App() {
  return (
    <Box>
      <Header />
      <Carrousel/>
      <About/>
      <Tratment/>
      <Contacts/>
    </Box>
  );
}

export default App;
