import { CommentsIcon } from "../icons/CommentsIcons";
import { PostIcon } from "../icons/PostIcon";
import { UsersIcon } from "../icons/UsersIcon";

export const userTabs = [
  {
    name: "Posts",
    path: "/user/posts",
    Icon: PostIcon,
  },
  {
    name: "Users",
    path: "/user/users",
    Icon: UsersIcon,
  },
  {
    name: "Comments",
    path: "/user/comments",
    Icon: CommentsIcon,
  },
];