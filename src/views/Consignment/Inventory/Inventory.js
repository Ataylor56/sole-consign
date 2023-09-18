import { Container } from "@mui/material";
import SearchBar from "../../../components/Search";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Columns } from "./InventoryConfig";
import { Rows } from "./InventoryDummyData";

const Inventory = () => {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const onSearchSubmit = (event) => {
    event.preventDefault();
    alert("searched for " + search);
  };

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
        Active Inventory
      </h1>
      <SearchBar
        value={search}
        onChange={(event) => onSearchChange(event)}
        onClick={(event) => onSearchSubmit(event)}
      />
      <DataGrid
        sx={{
          height: "100%",
          width: "100%",
          padding: "5x",
          margin: "15px",
        }}
        slots={{
          noRowsOverlay: () => "No Rows",
        }}
        rows={Rows}
        columns={Columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        disableSelectionOnClick
      />
    </Container>
  );
};

export default Inventory;
