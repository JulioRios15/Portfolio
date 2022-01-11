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
            primary: "#ececec",
            secondary: "#2f2f2f"
        }
    },
    typography: {
        fontFamily: "sans-serif"
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
                h1:{
                    fontSize: "3.5rem",
                    fontWeight: "600",
                },
                h2:{
                    fontSize: "3rem",
                    fontWeight: "600",
                },
                h3:{
                    fontSize: "2.5rem",
                    fontWeight: "600",
                },
                subtitle1: {
                    fontSize: "1.5rem",
                    fontWeight: "200"
                    
                },
                subtitle2: {
                    fontSize: "1.3rem",
                    fontWeight: "200"
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
    }
});