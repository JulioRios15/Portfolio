import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    palette: {
        background: {
            default: "#F0ECE3"
        },
        primary: {
            main: "#396EB0"
        },
        secondary: {
            main: "#FF5C58"
        },
        text: {
            primary: "#000000",
            secondary: "#FAEEE7"
        },
    },
    typography: {
        fontFamily: "Poppins sans-serif"
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
                h1:{
                    fontSize: "3.5rem",
                },
                h2:{
                    fontSize: "3rem",
                },
                h3:{
                    fontSize: "2.5rem",
                },
                subtitle1: {
                    fontSize: "1.5rem",
                    
                },
                subtitle2: {
                    fontSize: "1.3rem",
                },
                body1: {
                    fontSize: "1.1rem",
                },

                body2: {
                    fontSize: "1rem"
                },
                button: {
                    fontSize: "1.1rem"
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
                
            },
            defaultProps: {
                disableRipple: true
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                }
            },
            defaultProps: {
                elevation: 6,
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none"
                }
            },
            defaultProps: {
                disableRipple: true
            }
            
        },
        MuiTextField: {
            defaultProps: {
                variant: "filled",
                InputLabelProps:{
                    shrink: true
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "black",
                }
            }
        }
    }
});