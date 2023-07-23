import "./App.css";
import { WordleProvider } from "./store";
import { Theme } from "./theme/Theme";
import { Home } from "./components/pages";

function App() {
  return (
    <>
      <WordleProvider>
        <Theme>
          <Home />
        </Theme>
      </WordleProvider>
    </>
  );
}

export default App;
