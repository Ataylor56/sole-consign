import { Box, TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = ({ onChange, onClick, value }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        sx={{
          width: { xs: "100%", sm: "200px", md: "475px", lg: "500px" },
          margin: "10px",
        }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={onChange}
        value={value}
      />
      <IconButton aria-label="Search" onClick={onClick}>
        <Search />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
