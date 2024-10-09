import { useState } from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/headers/Header";
import UserProfile from "../../components/cards/UserProfile";
import SearchBar from "../../components/searchBar/SearchBar";
import { useUsers } from "../../hooks/useUsers";

export const Users = () => {
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
      <Header title="Users" createLabel="Create users" />
      <SearchBar query={query} setQuery={setQuery} label='Search users'  />
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
