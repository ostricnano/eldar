import { Box, Button, Typography } from "@mui/material";
import { HeaderProps } from "../../types";

export const Header = ({
  title,
  createLabel,
  setOpenModal,
}: HeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "20px",
      }}
    >
      <Typography variant="h5" sx={{ color: "#000" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", gap: "5px" }}>
        {createLabel && (
          <Button
            onClick={() => setOpenModal && setOpenModal(true)}
            variant="outlined"
            sx={{
              backgroundColor: "#ababab",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px 20px",
              gap: "1rem",
            }}
          >
            {createLabel}
          </Button>
        )}
      </Box>
    </Box>
  );
};
