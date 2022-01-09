import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    palette: {
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
        fontFamily: "Popins"
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                subtitle1: {
                    fontSize: "2rem"
                },
                subtitle2: {
                    fontSize: "1.5rem"
                },
                body1: {
                    fontSize: "1.2rem"
                },

                body2: {
                    fontSize: "1rem"
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
        }
    }
});