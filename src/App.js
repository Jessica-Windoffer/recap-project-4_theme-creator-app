import "./App.css";
import "./db";
import Header from "./components/Header/Header";
import Card from "./components/ColorCard/ColorCard";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Card />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
