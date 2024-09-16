import "./App.css";
import Content from "./content";
import NavBar from "./nav";

function App() {
  return (
    <div className="App flex text-sm bg-blue-950 text-gray-300 justify-evenly xs:flex-col-reverse">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
