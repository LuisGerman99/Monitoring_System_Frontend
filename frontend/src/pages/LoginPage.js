import { Typography, Grid, createTheme, ThemeProvider, Button } from '@mui/material'
import LoginForm from '../components/LoginForm'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../App.css";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                //Modificacion 1
                {
                    props: {
                        variant: "h5",
                    },
                    style: {
                        fontSize: 30,
                        fontWeight: 600,
                    },
                },
            ],
        },
    },
});

const Login = () => {
    let navigate = useNavigate();
    return (
        <Grid
            container
            minHeight="100vh"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <ThemeProvider theme={theme} >
                <Typography
                    variant="h5"
                    component="h1"
                    align="center"
                    marginBottom={5}
                >

                    Administracion HPM
                </Typography>
            </ThemeProvider>

            <Grid item xs={6} md={3}>
                <LoginForm />
            </Grid>

            <Grid item xs={6} md={3}>
                <Typography
                    marginBottom={5}
                />
                <Button variant="outlined" onClick={() => {
                    navigate("/graphpage");
                }}>
                    Dev Login
                </Button>
            </Grid>

        </Grid>
    );
};

export default Login;