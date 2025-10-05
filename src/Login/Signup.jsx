import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../Context/user";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name required *"),
  password: Yup.string()
    .required("Pasword is required *")
    .test(
      "strong-password",
      "Pasword must contain one number, alpha and special char",
      function (value) {
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(value);
      }
    ),

  email: Yup.string().email("Invalid Email Id").required("Email Id required *"),
  confirmPassword: Yup.string()
    .required("confirm password required *")
    .test(
      "password-same-test",
      "Password and Confirm Password Must be same",
      function (value) {
        let { password } = this.parent;
        return password == value;
      }
    ),
});

export default function Signup() {
  const [initalValues, setInitialValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signUpApi } = useUser();

  const handleSignup = (values) => {
    // TODO: Call backend API to create user
    console.log("values:", values);
    // console.log({ name, email, password });
    signUpApi(values);
  };

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={initalValues}
        validationSchema={validationSchema}
        onSubmit={handleSignup}
      >
        {({
          values,
          handleBlur,
          handleChange,
          errors,
          touched,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              sx={{
                mt: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" gutterBottom>
                Sign Up
              </Typography>
              <TextField
                name="name"
                fullWidth
                label="Name"
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <Box
                sx={{
                  height: "10px",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <Typography style={{ color: "red" }}>
                  {" "}
                  {errors.name && touched.name && errors?.name}
                </Typography>
              </Box>
              <TextField
                name="email"
                fullWidth
                label="Email"
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Box
                sx={{
                  height: "10px",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <Typography style={{ color: "red" }}>
                  {" "}
                  {errors.email && touched.email && errors?.email}
                </Typography>
              </Box>
              <TextField
                name="password"
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Box
                sx={{
                  height: "10px",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <Typography style={{ color: "red" }}>
                  {" "}
                  {errors.password && touched.password && errors?.password}
                </Typography>
              </Box>
              <TextField
                fullWidth
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <Box
                sx={{
                  height: "10px",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <Typography style={{ color: "red" }}>
                  {" "}
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors?.confirmPassword}
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                type="submit"
                // onClick={handleSignup}
              >
                Sign Up
              </Button>
              <Typography sx={{ mt: 2 }}>
                Already have an account? <Link to="/login">Login</Link>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
