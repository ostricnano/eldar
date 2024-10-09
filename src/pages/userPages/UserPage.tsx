import { useState } from "react";
import { Box, Typography } from "@mui/material";
import UserProfile from "../../components/cards/UserProfile";
import SearchBar from "../../components/searchBar/SearchBar";
import { useUsers } from "../../hooks/useUsers";
import {
  basePageStyles,
  cardContainerStyles,
  userHeaderStyles,
} from "../../assets/styles/pages";

const UserPage = () => {
  const { users } = useUsers();
  const [query, setQuery] = useState<string>("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box sx={basePageStyles}>
      <Box sx={userHeaderStyles}>
        <Typography variant="h5">Users</Typography>

        <SearchBar query={query} setQuery={setQuery} label="Search users" />
      </Box>
      <Box sx={cardContainerStyles}>
        {filteredUsers.map((user) => (
          <UserProfile key={user.username} user={user} />
        ))}
      </Box>
    </Box>
  );
};

export default UserPage;
