import "./App.css";
import Content from "./content";
import NavBar from "./nav";

function App() {
  return (
    <div className="App flex font-mono text-sm bg-lime-900 text-gray-400">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
