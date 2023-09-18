import {
  Container,
  FormGroup,
  FormControlLabel,
  Switch,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";

const Settings = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Container
      sx={{
        position: "absolute",
        width: { xs: "100vw", sm: "calc(100vw - 200px)" },
        height: "100vh",
        left: { xs: "0", sm: "200px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      maxWidth="false"
    >
      <h1>Settings</h1>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch type="checkbox" onChange={colorMode.toggleColorMode} />
          }
          label={theme.palette.mode === "dark" ? "Dark Mode" : "Light Mode"}
        />
      </FormGroup>
    </Container>
  );
};

export default Settings;
