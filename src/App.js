import "./App.css";

import WordCounter from "./components/word counter";
import ColorPicker from "./components/colorpicker";
import AgeCalculator from "./components/AgeCalculator";

function App() {
  const colors = ["#FF5733", "#33FF57", "#3366FF", "#FF33DD"];
  return (
    <>
      {/* <WordCounter /> */}

      {/* <ColorPicker colors={colors} /> */}
      <AgeCalculator />
    </>
  );
}

export default App;
