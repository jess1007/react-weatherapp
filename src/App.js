import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <small>
          This{" "}
          <a
            href="https://github.com/jess1007/react-weatherapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            project
          </a>{" "}
          was coded by Jess Gernelle
        </small>
      </div>
    </div>
  );
}

export default App;
