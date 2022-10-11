import "./App.css";
import { Route, Routes } from "react-router-dom";
import Items from "./items";
import Users from "./components/Users";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header-Nav/Header";
import Nav from "./components/Header-Nav/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<Items />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
