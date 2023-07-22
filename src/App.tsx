import "./App.css";
import { WordleProvider } from "./store";

function App() {
  return (
    <>
      <WordleProvider>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </WordleProvider>
    </>
  );
}

export default App;
