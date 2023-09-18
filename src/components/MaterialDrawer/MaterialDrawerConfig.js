import { Home, ListRounded, Settings } from "@mui/icons-material";
import { Divider } from "@mui/material";

export const MaterialDrawerConfig = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    id: 2,
    title: "Consignment",
    path: "/consignment",
    icon: <ListRounded />,
  },
  {
    id: 3,
    title: "divider",
    icon: <Divider />,
  },
  {
    id: 4,
    title: "Settings",
    path: "/settings",
    icon: <Settings />,
  },
];
