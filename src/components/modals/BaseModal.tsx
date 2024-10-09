import { Box, Modal, Typography } from "@mui/material";
import { CloseIcon } from "../../icons/CloseIcon";
import { BaseModalProps } from "../../types";

export const BaseModal = ({
  children,
  openModal,
  setOpenModal,
  title,
  width = "60%",
  onClose = () => setOpenModal(false),
}: BaseModalProps) => {
  return (
    <Modal
      open={openModal}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: width,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "10px",
        }}
      >
        <Box
          className="table-header-box"
          sx={{
            paddingBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Box onClick={onClose} sx={{ cursor: "pointer" }}>
            <CloseIcon />
          </Box>
        </Box>
        {children}
      </Box>
    </Modal>
  );
};
