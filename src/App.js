import "./App.css";
import "./db";
import Header from "./components/Header/Header";
import { themes } from "./db";
import Theme from "./components/Theme/Theme";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {" "}
        <ul className="theme-list">
          {themes.map((theme) => (
            <li key={theme.id}>
              <Theme name={theme.name} colors={theme.colors} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
