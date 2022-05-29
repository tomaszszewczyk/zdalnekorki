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
export const greyColor = '#2d2d2d'
export const lightGreyColor = '#3f3f3f'
export const yellowColor = '#ffe473'
export const orangeColor = '#C04300'

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
        h1: {
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '81px',
            color: primaryColor,
        },
        h2: {
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '72px',
            color: primaryColor,
        },
        h3: {
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '40px',
            color: primaryColor,
        },
        h4: {
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '30px',
            color: orangeColor,
        },
        h5: {
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '24px',
            color: orangeColor,
        },
        subtitle1: {
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '16px',
            color: greyColor,
        },
        subtitle2: {
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '14px',
            color: lightGreyColor,
        },
        body1: {
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '16px',
            color: greyColor,
        },
        button: {
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '36px',
            color: primaryColor,
        }
    },
    palette: {
        primary: {
            main: primaryColor
        },
        text: {
            primary: greyColor
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
              size: 'large',
            },
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    textTransform: "none",
                    borderRadius: '100px',
                    ':focus': {
                        outline: 'black solid 2px',
                        outlineOffset: '3px',
                        borderRadius: '2px',
                    }
                },
                contained: {
                    color: primaryColor,
                    backgroundColor: '#ffe473'
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
                    borderRadius: '32px',
                    borderWidth: '2px',
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
