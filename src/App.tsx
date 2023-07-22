import "./App.css";
import { WordleProvider } from "./store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Home } from "./components/pages";

function App() {
  return (
    <>
      <WordleProvider>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </WordleProvider>
    </>
  );
}

export default App;
