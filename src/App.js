import "./App.css";
import "./db";
import Header from "./components/Header/Header";
import { themes as initialThemes } from "./db";
import Theme from "./components/Theme/Theme";
import ThemeForm from "./components/ThemeForm/ThemeForm";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [themes, setThemes] = useState(initialThemes);

  // function handleAddTheme(newTheme) {
  //   const newThemeWithId = { ...newTheme, id: uuid() };
  //   setThemes([newThemeWithId, ...themes]);
  // }

  function handleAddTheme(newTheme) {
    setThemes([
      {
        id: uuid(),
        name: newTheme.name,
        colors: [
          { role: "primary", value: newTheme.primaryColor, name: "default" },
          {
            role: "secondary",
            value: newTheme.secondaryColor,
            name: "default",
          },
          { role: "surface", value: newTheme.surfaceColor, name: "default" },
          {
            role: "surface-on",
            value: newTheme.surfaceOnColor,
            name: "default",
          },
        ],
      },
      ...themes,
    ]);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {" "}
        <ThemeForm onSubmit={handleAddTheme} />
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
