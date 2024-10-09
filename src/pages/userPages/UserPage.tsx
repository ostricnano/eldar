import { useState } from "react";
import { Box, Typography } from "@mui/material";
import UserProfile from "../../components/cards/UserProfile";
import SearchBar from "../../components/searchBar/SearchBar";
import { useUsers } from "../../hooks/useUsers";

const UserPage = () => {
  const { users } = useUsers();
  const [query, setQuery] = useState<string>("");

  const filteredUsers = users.filter(
    (user) => user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between", 
          margin: "20px", 
        }}
      >
        <Typography variant="h5">Users</Typography>

      <SearchBar query={query} setQuery={setQuery} label="Search users" />  
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredUsers.map((user) => (
          <UserProfile key={user.username} user={user} />
        ))}
      </Box>
    </Box>
  );
};

export default UserPage;
