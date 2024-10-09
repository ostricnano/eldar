import { Box, Typography } from "@mui/material";
import CustomInput from "../customInputs/CustomInput";
import { CustomButton } from "../buttons.tsx/CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import RadioInput from "../customInputs/RadioInput";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  role: Yup.string().required("Role is required"),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { login, authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.jwt) {
      if (authState.role === "admin") {
        navigate("/users");
        toast.success("Logged in successfully");
      } else if (authState.role === "user") {
        navigate("/user/users");
        toast.success("Logged in successfully");
      }
    }
  }, [authState.jwt, authState.role, navigate]);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      try {
        login(values.email, values.password, values.role);
        if (authState.jwt && authState.role === "admin") {
            navigate("/posts");
            toast.success("Logged in successfully");
        } else if (authState.jwt && authState.role === "user") {
            navigate("user");
            toast.success("Logged in successfully");
        }
      } catch (error) {
        toast.error("Failed to login");
        console.log(error);
      } finally {
          setLoading(false);
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
            <RadioInput
              label="Role"
              name="role"
              value={values.role}
              options={["admin", "user"]}
              error={Boolean(errors.role)}
              helperText={errors.role}
              onChange={handleChange}
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
            <CustomButton type="submit" loading={loading}>
              Iniciar sesión
            </CustomButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
