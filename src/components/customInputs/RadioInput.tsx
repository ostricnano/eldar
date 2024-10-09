import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { RadioInputProps } from "../../types";

const RadioInput = ({
  label,
  name,
  value,
  options,
  error,
  helperText,
  onChange,
}: RadioInputProps) => {
  return (
    <Box>
      <FormControl component="fieldset">
        <FormLabel sx={{ fontSize: "14px", color: "#000" }} component="legend">
          {label}
        </FormLabel>
        <RadioGroup
          name={name}
          value={value}
          onChange={onChange}
          sx={{
            color: "#000",
            fontSize: "1px",
          }}
        >
          {options?.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
              sx={{
                color: "#000",
                marginLeft: "18px",
                "&.Mui-checked": {
                  color: "#5B4FB9",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: 18,
                  color: "#5B4FB9",
                },
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
      {error && !value && (
        <FormHelperText sx={{ marginLeft: "10px" }} error>
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
};

export default RadioInput;
