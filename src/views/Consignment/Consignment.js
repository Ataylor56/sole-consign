import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ConsignmentConfig } from "./ConsignmentConfig";

const Consignment = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        position: "absolute",
        width: { xs: "100vw", sm: "calc(100vw - 200px)" },
        height: "100vh",
        left: { xs: "0", sm: "200px" },
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        overflowX: "hidden",
      }}
      maxWidth="false"
    >
      {ConsignmentConfig.map((item) => {
        return (
          <Card
            sx={{
              width: "300px",
              height: "300px",
              margin: "15px",
            }}
            onClick={(event) => {
              event.preventDefault();
              navigate(item.path);
            }}
          >
            <CardMedia
              component="img"
              width="200"
              height="200"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};
export default Consignment;
