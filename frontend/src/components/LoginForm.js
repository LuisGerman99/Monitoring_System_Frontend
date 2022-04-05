import React, { useState } from 'react';
import { Typography, Box, Button, createTheme, ThemeProvider } from '@mui/material'
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                //Modificacion 1 - Inicia Sesion Button
                {
                    props: {
                        variant: "h6",
                    },
                    style: {
                        fontSize: 20,
                        fontWeight: 500,
                        color: "#3F50C5"
                    },
                },
                // Modificacion 2 - Error Info display
                {
                    props: {
                        variant: "h7",
                    },
                    style: {
                        fontSize: 16,
                        fontWeight: 350,
                        color: "red"
                    },
                },
            ],
        },
    },
});

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [correoError, setCorreoError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [errorInfo, setErrorInfo] = useState('')

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const checkPassword = (e) => {
        e.preventDefault() //Para que no se refresque la pagina

        if (correo && password) {
            setCorreoError(false)
            setPasswordError(false)
            if (correo === 'email@gmail.com' && password === 'password') {
                setErrorInfo('')
            } else {
                setErrorInfo('Usuario o contraseña incorrectos')
            }
        } else {
            setErrorInfo('Favor de introducir usuario y contraseña')
            if (correo === '') {
                setCorreoError(true)
            } else {
                setCorreoError(false)
            }
            if (password === '') {
                setPasswordError(true)
            } else {
                setCorreoError(false)
            }
        }
    }

    return (
        <form
            noValidate
            autoComplete='off'
            onSubmit={checkPassword}
        >
            <Box sx={{ mb: 3 }}>
                <TextField
                    onChange={(e) => setCorreo(e.target.value)}
                    label="Correo de usuario"
                    fullWidth
                    required
                    margin="normal"
                    variant='outlined'
                    error={correoError}
                />
                <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    label='contraseña'
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    error={passwordError}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>

            <ThemeProvider theme={theme}>
                <Typography
                    variant="h7"
                    component="h6"
                    marginBottom={1}
                >
                    {errorInfo}
                </Typography>
                <Button
                    type="submit"
                    size="large"
                    fullWidth
                >
                    <Typography
                        variant="h6"
                        component="h6"
                        marginTop={1}
                        marginBottom={1}
                    >
                        INICIA SESION
                    </Typography>
                </Button>
            </ThemeProvider>
        </form>
    );
}

export default LoginForm;