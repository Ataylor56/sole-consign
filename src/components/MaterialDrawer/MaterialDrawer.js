import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Fab,
} from "@mui/material";
import {
  Search,
  Inbox,
  Mail,
  ListRounded,
  Home,
  AcUnit,
  AccessAlarms,
  Nightlife,
  MenuOpen,
  SearchOff,
  More,
  Add,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { useState, useContext } from "react";
import { ColorModeContext } from "../../contexts/ColorModeContext";
import { useNavigate } from "react-router-dom";
import { MaterialDrawerConfig } from "./MaterialDrawerConfig";

const MaterialDrawer = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const drawerWidth = 200;
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <List>
          {MaterialDrawerConfig.map((item) => {
            return (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <Divider />
          <ListItem key={3} sx={{ alignSelf: "flex-end" }} disablePadding>
            <ListItemButton onClick={colorMode.toggleColorMode}>
              <ListItemIcon>
                {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
              </ListItemIcon>
              <ListItemText
                primary={
                  theme.palette.mode === "dark" ? "Light Theme" : "Dark Theme"
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar>
          {MaterialDrawerConfig.map((item) => {
            return (
              <IconButton
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.icon}
              </IconButton>
            );
          })}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MaterialDrawer;
