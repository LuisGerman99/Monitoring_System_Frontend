import { Typography, Grid, createTheme, ThemeProvider } from '@mui/material'
import LoginForm from '../components/LoginForm'
import React from 'react'

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

        </Grid>
    );
};

export default Login;