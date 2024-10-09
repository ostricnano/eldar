import { toast } from "sonner";
import { axiosClient } from "./axiosClient";
import { CreateComments } from "../types";

export const getAllComments = async () => {
  try {
    const response = await axiosClient.get("/comments");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createComment = async (comment: CreateComments) => {
  try {
    const response = await axiosClient.post("/comments", comment);
    if (response.status === 201) {
      toast.success("Comment created successfully");
      return response.data;
    } else {
      toast.error("Error creating comment");
    }
  } catch (error) {
    toast.error("Error updating post");
    console.error(error);
  }
};

export const updateComment = async (id: number, comment: CreateComments) => {
  try {
    const response = await axiosClient.put(`/comments/${id}`, comment);
    if (response.status === 200) {
      toast.success("Comment updated successfully");
      return response.data;
    } else {
      toast.error("Error updating comment");
    }
  } catch (error) {
    toast.error("Error updating post");
    console.error(error);
  }
};

export const deleteComment = async (id: number) => {
  try {
    const response = await axiosClient.delete(`/comments/${id}`);
    if (response.status === 200) {
      toast.success("Comment deleted successfully");
      return response.data;
    } else {
      toast.error("Error deleting comment");
    }
  } catch (error) {
    toast.error("Error deleting comment");
    console.error(error);
  }
};