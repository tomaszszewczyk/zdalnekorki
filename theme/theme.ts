import {createTheme} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

const breakpointsTheme = createTheme({
    breakpoints: {
        values: {
            sm: 0,
            md: 744,
            lg: 1024,
            xl: 1200,
        }
    }
})

export const greyBackgroundColor = '#FAFCFF'
export const primaryColor = '#472156'

export const theme = createTheme( {
    breakpoints: {
        values: {
            sm: 0,
            md: 744,
            lg: 1024,
            xl: 1200,
        }
    },
    typography: {

    },
    palette: {
        primary: {
            main: primaryColor
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    color: 'black',
                    borderRadius: '0px',
                    ':focus': {
                        outline: 'black solid 2px',
                        outlineOffset: '3px',
                        borderRadius: '2px',
                    }
                },
                contained: {
                    color: 'white',
                }
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    ':focus': {
                        outline: 'black solid 2px',
                        outlineOffset: '6px',
                        borderRadius: '2px',
                    }
                }
            }
        },
        MuiCard: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    borderRadius: '2px'
                }
            }
        }
    }
})

export const footerTheme = createTheme(theme, {
    typography: {
        body1: {
            color: 'white'
        },
        h5: {
            color: 'white'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    borderRadius: '0px',
                    ':focus': {
                        outline: 'white solid 2px',
                        outlineOffset: '3px',
                        borderRadius: '2px',
                    }
                },
                contained: {
                    color: 'white',
                }
            }
        },
    }
})
