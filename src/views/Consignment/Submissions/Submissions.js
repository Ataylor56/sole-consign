import { Container, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { SubmissionsConfig } from "./SubmissionsConfig";

const Submissions = () => {
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
      <h1
        style={{
          alignSelf: "flex-start",
        }}
      >
        Submissions
      </h1>
      <Button
        sx={{
          alignSelf: "flex-end",
          margin: "15px",
        }}
        variant="contained"
        onClick={() => alert("New Submission")}
      >
        New Submission
      </Button>
      <DataGrid
        sx={{
          width: "100%",
        }}
        rows={[]}
        columns={SubmissionsConfig}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
};

export default Submissions;
