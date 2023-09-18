import { useTheme, Box, IconButton } from "@mui/material";
import { useContext } from "react";
import { AcUnit, AccessAlarms } from "@mui/icons-material";
import { ColorModeContext } from "../contexts/ColorModeContext";
import MaterialDrawer from "../components/MaterialDrawer/MaterialDrawer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./Consignment/Inventory/Inventory";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        left: { xs: "0", sm: "200px" },
      }}
    >
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
