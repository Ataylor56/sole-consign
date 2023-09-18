import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MaterialDrawerConfig } from "./MaterialDrawerConfig";

const MaterialDrawer = () => {
  const drawerWidth = 200;
  const navigate = useNavigate();

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
            if (item.title === "divider") return <Divider />;
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
            if (item.title === "divider") return <Box sx={{ flexGrow: 1 }} />;
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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MaterialDrawer;
