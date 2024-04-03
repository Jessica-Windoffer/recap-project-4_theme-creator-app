import "./App.css";
import "./db";
import Header from "./components/Header/Header";
import ColorCard from "./components/ColorCard/ColorCard";
import { themes } from "./db";

function App() {
  const theme = themes[0];
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <h2 className="theme-title">{theme.name}</h2>
        <ul className="color-list">
          {theme.colors.map((color) => (
            <li key={color.role}>
              <ColorCard color={color} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
