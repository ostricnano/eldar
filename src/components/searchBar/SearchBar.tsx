import { Box, IconButton, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { CloseIcon } from "../../icons/CloseIcon";
import { SearchBarProps } from "../../types";

const SearchBar = ({ query, label, setQuery }: SearchBarProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        label={label}
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ width: "300px" }}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
      {query.length > 0 && (
        <IconButton onClick={() => setQuery("")}>
          <CloseIcon fontSize="16px" color="#ababab" />
        </IconButton>
      )}
    </Box>
  );
};

export default SearchBar;
