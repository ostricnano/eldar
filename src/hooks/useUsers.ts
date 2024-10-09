import { useEffect, useState } from "react";
import { UserProfileProps } from "../types";
import { getAllUsers } from "../services/userService";

export const useUsers = () => {
  const [users, setUsers] = useState<UserProfileProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await getAllUsers();
      if(response){
        setUsers(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [])

  return { users, loading, fetchUsers };
}