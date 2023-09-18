import Login from "./views/Login";
import { useState, useMemo } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import { ColorModeContext } from "./contexts/ColorModeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import Inventory from "./views/Consignment/Inventory/Inventory";
import MaterialDrawer from "./components/MaterialDrawer/MaterialDrawer";
import Consignment from "./views/Consignment/Consignment";
import Sold from "./views/Consignment/Sold/Sold";
import Withdrawls from "./views/Consignment/Withdrawls/Withdrawls";
import Submissions from "./views/Consignment/Submissions/Submissions";

function App() {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <MaterialDrawer />
          <Routes>
            <Route path="login" element={<Login />} />
            <Route index element={<Home />} />
            <Route path="/consignment" element={<Consignment />} />
            <Route path="/consignment/inventory" element={<Inventory />} />
            <Route path="/consignment/sold" element={<Sold />} />
            <Route path="/consignment/withdrawls" element={<Withdrawls />} />
            <Route path="/consignment/submissions" element={<Submissions />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
