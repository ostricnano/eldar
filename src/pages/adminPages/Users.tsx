import { Box } from "@mui/material";
import { Header } from "../../components/headers/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import UserProfile from "../../components/cards/UserProfile";
import SearchBar from "../../components/searchBar/SearchBar";

export interface UserProfileProps {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const Users = () => {
  const [users, setUsers] = useState<UserProfileProps[]>([]);
  const [query, setQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<UserProfileProps[]>([]);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) 
    );
    setFilteredPosts(filtered);
  }, [query, users]);


  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  
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
        {filteredPosts.map((user) => (
          <UserProfile key={user.username} user={user} />
        ))}
      </Box>
    </Box>
  );
};
