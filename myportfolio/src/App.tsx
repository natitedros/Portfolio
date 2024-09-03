import "./App.css";
import Content from "./content";
import NavBar from "./nav";

function App() {
  return (
    <div className="App flex font-mono">
      <div className="w-2/5 h-screen bg-slate-300">
        <NavBar />
      </div>
      <div className="bg-gray-300 w-3/5 h-screen">
        <Content />
      </div>
    </div>
  );
}

export default App;
