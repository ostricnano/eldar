import { Button } from "@mui/material";
import { LoadingSpinner } from "../../icons/LoadingSpinner";

interface CustomButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button";
  loading?: boolean;
}

export const CustomButton = ({
  children,
  type,
  loading,
}: CustomButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      type={type}
      sx={{
        backgroundColor: "#ababab",
        color: "#fff",
        borderRadius: "5px",
        padding: "10px 20px",
        gap: "1rem",
        width: "40%",
      }}
    >
      {children}
      {loading && <LoadingSpinner />}
    </Button>
  );
};
