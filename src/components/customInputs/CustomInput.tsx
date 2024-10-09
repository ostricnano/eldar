import { Box, FormLabel, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { CustomInputProps } from "../../types";


const CustomInput = ({
  label,
  type,
  name,
  value,
  helperText,
  error,
  rows = 1,
  multiline=false,
  onChange,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setInputType("password");
    } else {
      setInputType("text");
    }
  }
  return (
    <Box>
      <FormLabel sx={{ fontSize: "14px", color: "#000" }}>{label}</FormLabel>
      <Box sx={{ position: "relative" }}>
        <TextField
          fullWidth
          name={name}
          value={value}
          type={inputType}
          error={error}
          helperText={helperText}
          multiline={multiline}
          rows={rows} 
          sx={multiline ? { height: "auto" } : {}} 
          onChange={onChange}
        />
        {type == "password" && (
          <Box
            sx={{
              position: "absolute",
              right: "10px",
              top: "18px",
              cursor: "pointer",
            }}
          >
            {
              showPassword ? (
                <VisibilityOff onClick={handleShowPassword} />
              ) : (
                <Visibility onClick={handleShowPassword} />
              )
            }
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CustomInput;
