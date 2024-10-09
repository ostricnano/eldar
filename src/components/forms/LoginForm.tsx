import { Box, Typography } from "@mui/material";
import CustomInput from "../customInputs/CustomInput";
import { CustomButton } from "../buttons/CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await login(values.email, values.password);
      const token = sessionStorage.getItem("jwt");
      const role = sessionStorage.getItem("role");
      if (token && role === "admin") {
        toast.success("Logged in successfully");
        navigate("/users");
      } else if (token && role === "user") {
        toast.success("Logged in successfully");
        navigate("/user/users");
      } else {
        toast.error("Invalid credentials");
      }
      
    },
    validationSchema: loginValidationSchema,
    validateOnChange: false,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "1rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#2F3349",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Inciar sesión
      </Typography>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <CustomInput
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <CustomInput
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              width: "100%",
            }}
          >
            <CustomButton type="submit" >
              Iniciar sesión
            </CustomButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
