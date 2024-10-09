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
          >
            {createLabel}
          </Button>
        )}
      </Box>
    </Box>
  );
};
