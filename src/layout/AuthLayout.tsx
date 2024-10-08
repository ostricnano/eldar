import { Box } from "@mui/material";
import authImage from "../assets/images/backgroundAuth.png";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "space-between" },
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: { xs: "#2F3349", sm: "transparent" },
        backgroundImage: { xs: `url(${authImage})`, sm: "none" },
        backgroundSize: { xs: "cover", sm: "none" },
        backgroundPosition: { xs: "center", sm: "none" },
      }}
    >
      <Box
        sx={{
          width: { sm: "50%", md: "60%" },
          height: "100%",
          display: { xs: "none", sm: "flex" },
          boxShadow: "10px 0 30px -5px rgba(0, 0, 0, 0.5)",
          zIndex: 2,
          position: "relative",
        }}
      >
        <img
          src={authImage}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <h2
          style={{
            position: "absolute",
            bottom: "20px",
            right: "40px",
            color: "whitesmoke",
            fontSize: "1rem",
            fontWeight: "400",
            opacity: "0.8",
          }}
        >
          Designed by Eldar
        </h2>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "50%", md: "40%" },
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
