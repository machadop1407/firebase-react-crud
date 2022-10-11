import "./App.css";
import { Route, Routes } from "react-router-dom";
import Items from "./items";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/items" element={<Items />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
