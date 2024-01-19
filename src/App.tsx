import Color from "./components/Color";
import "./App.css";

function App() {
  return (
    <>
      <Color color="yellow">
        <Color color="blue">
          <Color color="red" />
        </Color>
      </Color>
    </>
  );
}

export default App;
