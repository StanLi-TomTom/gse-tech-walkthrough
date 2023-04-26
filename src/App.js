import "./styles.css";
import { ThemeProvider } from "@mui/material/styles";
import UploadSingleDelivery from "./UI/upload-single-delivery";
import theme from "./assets/theme";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <UploadSingleDelivery />
      </ThemeProvider>
    </div>
  );
}
