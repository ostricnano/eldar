import { CommentsIcon } from "../icons/CommentsIcons";
import { PostIcon } from "../icons/PostIcon";
import { UsersIcon } from "../icons/UsersIcon";

export const adminTabs = [
  {
    name: "Users",
    path: "/users",
    Icon: UsersIcon,
  },
  {
    name: "Posts",
    path: "/posts",
    Icon: PostIcon,
  },
  {
    name: "Comments",
    path: "/comments",
    Icon: CommentsIcon,
  },
];