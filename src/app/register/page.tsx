"use client";
import Form from "@/components/Forms/Form";
import InputField from "@/components/Forms/InputField";
import {
  Container,
  Stack,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { GiArchiveRegister } from "react-icons/gi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const validationSchema=z.object({
  name:z.string().min(1,"Enter Your Name!"),
  email:z.string().email("Enter Your valid Email address!"),
  password:z.string().min(6,"Password must be 6 character long!"),
  contactNumber: z.string().regex(/^\d{11}$/, "Enter Your Phone Number!"),
})

const defaultValues = {
  name: "",
  email: "",
  password: "",
  contactNumber: "",
};

const RegisterPage = () => {
  const handleRegister =  (data: FieldValues) => {
    // try {
    //   // Log form data
    //   console.log("Form Data:", data);
      
    //   // You can proceed with further actions here, like making API requests
      
    // } catch (error) {
    //   // If there's an error, log it
    //   console.error("Error:", error);
    // }
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 2,
            borderRadius: 1,
            padding: "32px",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            my={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box m={1} fontWeight={900} fontSize={60} color="#EAB308">
              <GiArchiveRegister />
            </Box>
            <Box fontWeight={700} fontSize={50} color="#EAB308">
              Registration
            </Box>
          </Stack>
          <Box>
            <Form
             onSubmit={handleRegister}
              // defaultValues={defaultValues}
              // resolver={zodResolver(validationSchema)}
              >
              <Grid container spacing={2} my={1}>
                <Grid item md={6} sm={12}  sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginX: "auto",
                }}>
                  <InputField
                  name="name"
                  type="text"
                  label="Name"
                  fullWidth={true}
                  size="small"
                  required
                  />
                </Grid>
                <Grid item md={6} sm={12}  sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginX: "auto",
                }}>
                  <InputField
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth={true}
                  size="small"
                  required
                  />
                </Grid>
                <Grid item md={6} sm={12}  sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginX: "auto",
                }}>
                  <InputField
                  name="password"
                  type="password"
                  label="Password"
                  fullWidth={true}
                  size="small"
                  required
                  />
                </Grid>
                <Grid item md={6} sm={12}  sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginX: "auto",
                }}>
                  <InputField
                  name="contactNumber"
                  type="number"
                  label="Contact Number"
                  fullWidth={true}
                  size="small"
                  required
                  />
                </Grid>
               
              </Grid>
              <Button
              variant="contained"
                type="submit"
                fullWidth={true}
                sx={{ margin: "10px 0px" }}
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300} color="GrayText">
                Do You Already Have an Account?{" "}
                <Link style={{color:"blue",fontWeight:"bold"}} href="/login">
                  Login
                </Link>
              </Typography>
             
            </Form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
