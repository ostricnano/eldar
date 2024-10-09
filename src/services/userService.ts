import { toast } from "sonner";
import { axiosClient } from "./axiosClient";
import { UserProfileProps } from "../types";

export const getAllUsers = async () => {
  try {
    const response = await axiosClient.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (user: UserProfileProps) => {
  try {
    const response = await axiosClient.post("/users", user);
    if (response.status === 201) {
      toast.success("User created successfully");
      return response.data;
    } else {
      toast.error("Error creating user");
    }
  } catch (error) {
    console.error(error);
  }
};