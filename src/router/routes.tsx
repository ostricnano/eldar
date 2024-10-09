import { AuthProvider } from "../context/auth-context/AuthProvider";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import ProtectedRoutes from "./ProtectedRoutes";
import Navbar from "../layout/Navbar";
import { Users } from "../pages/adminPages/Users";
import Posts from "../pages/adminPages/Posts";
import Comments from "../pages/adminPages/Comments";
import LoginPage from "../pages/authPages/LoginPage";
import UserPage from "../pages/userPages/UserPage";
import "../index.css";
import ProtectedUserRoutes from "./ProtectedUserRoutes";
import PostPages from "../pages/userPages/PostPages";
import CommentPage from "../pages/userPages/CommentPage";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toaster
        duration={2500}
        toastOptions={{
          style: {
            height: "45px",
            padding: "0.5rem",
          },
        }}
      />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            
            {/* Add ProtectedRoutes component to the Route element */}
            <Route element={<ProtectedRoutes />}>
              <Route element={<Navbar />} >
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/comments" element={<Comments />} />
              </Route>
            </Route>
            <Route element={<ProtectedUserRoutes />}>
              <Route element={<Navbar />}>
                <Route path="/user/users" element={<UserPage />} />
                <Route path="/user/posts" element={<PostPages />} />
                <Route path="/user/comments" element={<CommentPage/>} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  );
};
export default AppRouter;
