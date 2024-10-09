import { toast } from "sonner";
import { axiosClient } from "./axiosClient";
import { CreatePost } from "../types";


export const getAllPost = async () => {
  try {
    const response = await axiosClient.get("/posts");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (post: CreatePost) => {
  try {
    const response = await axiosClient.post("/posts", post);
    if (response.status === 201) {
      toast.success("Post created successfully");
      return response.data;
    } else {
      toast.error("Error creating post");
    }
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = async (id: number, post: CreatePost) => {
  try {
    const response = await axiosClient.put(`/posts/${id}`, post);
    if (response.status === 200) {
      toast.success("Post updated successfully");
      return response.data;
    } else {
      toast.error("Error updating post");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error updating post");
  }
};

export const deletePost = async (id: number) => {
  try {
    const response = await axiosClient.delete(`/posts/${id}`);
    if (response.status === 200) {
      toast.success("Post deleted successfully");
      return response.data;
    } else {
      toast.error("Error deleting post");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error deleting post");
  }
};
