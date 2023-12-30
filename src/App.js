import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This{" "}
        <a
          href="https://github.com/jess1007/react-weatherapp"
          target="blank"
          rel="noopener noreferrer"
        >
          project
        </a>{" "}
        was coded by Jess Gernelle
      </footer>
    </div>
  );
}

export default App;
