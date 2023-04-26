import { createTheme } from "@mui/material/styles";

const fontFamilyGothamBold = [
  "Montserrat",
  "Raleway",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(",");
const TT_primaryColor_500 = "#DF1B12";
const textRequired = TT_primaryColor_500;
const altFontFeatureSettings = `"ss01" 1, "ss03" 1, "ss05" 1, "ss08" 1, "ss09" 1, "ss11" 1`;
const inputBorderOnFocus = "#2a90d5";
const theme = createTheme({
  typography: {
    h3: {
      color: "#000000",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32px",
      display: "block",
      textAlign: "center",
      fontFeatureSettings: altFontFeatureSettings
    },
    caption: {
      fontFamily: fontFamilyGothamBold,
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "14px",
      display: "flex",
      paddingBottom: "2px",
      fontFeatureSettings: altFontFeatureSettings
    },
    required: {
      fontFamily: fontFamilyGothamBold,
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "14px",
      color: textRequired,
      fontFeatureSettings: altFontFeatureSettings,
      display: "flex",
      paddingBottom: "2px",
      paddingLeft: "4px",
      paddingRight: "4px"
    }
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: inputBorderOnFocus,
              borderWidth: "3px"
            }
          },
          '& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected="true"]': {
            backgroundColor: "white"
          },
          '& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected="false"].Mui-focused': {
            backgroundColor: "#e5e5e5"
          }
        }
      }
    }
  }
});

export default theme;
