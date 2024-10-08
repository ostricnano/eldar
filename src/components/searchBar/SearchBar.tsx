import { Box, IconButton, TextField } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material";

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({query, setQuery}: SearchBarProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
    <TextField
      label="Search posts"
      variant="outlined"
      value={query} 
      onChange={(e) => setQuery(e.target.value)} 
      sx={{ width: "300px" }}
    />
    <IconButton>
      <SearchIcon />
    </IconButton>
  </Box>
  )
}

export default SearchBar