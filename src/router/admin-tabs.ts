import { CommentsIcon } from "../icons/CommentsIcons";
import { PostIcon } from "../icons/PostIcon";
import { UsersIcon } from "../icons/UsersIcon";

export const adminTabs = [
  {
    name: "Posts",
    path: "/posts",
    Icon: PostIcon,
  },
  {
    name: "Users",
    path: "/users",
    Icon: UsersIcon,
  },
  {
    name: "Comments",
    path: "/comments",
    Icon: CommentsIcon,
  },
];