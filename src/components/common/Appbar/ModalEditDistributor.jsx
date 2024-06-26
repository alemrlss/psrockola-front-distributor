import { Box, Modal, Tab, Tabs, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
//import ChangePasswordSubcompany from "../../Settings/Subcompany/ChangePasswordSubcompany";
//import UpdatePhotoSubcompany from "../../Settings/Subcompany/UpdatePhotoSubcompany";

function ModalDistributorEdit({ openModal, handleCloseModal, user }) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="user-settings-modal"
      aria-describedby="user-settings-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: 600, // Ancho fijo del modal
            height: 400, // Altura fija del modal
            bgcolor: "white",
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton onClick={handleCloseModal}>
              <CloseIcon
                sx={{
                  color: "red",
                  border: "1px solid red",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              aria-label="User Settings Tabs"
              sx={{ mb: 2 }}
            >
              {<Tab label="Update profile" />}
              {<Tab label="Change password" />}
              <Tab label="Update profile photo" variant="contained" />
            </Tabs>

         
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalDistributorEdit;
