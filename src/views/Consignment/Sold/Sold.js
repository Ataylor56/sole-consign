import { Container } from "@mui/material";

const Sold = () => {
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
      <h1>Sold</h1>
    </Container>
  );
};

export default Sold;
