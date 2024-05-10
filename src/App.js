import "./App.css";
import Menu from "./components/Menu/Menu";
import ProductCard from "./components/ProductCard/ProductCard";

const arr = ["t1", "t2", "t3", "t4"];

function App() {
  return (
    <div className="App">
      <Menu type={"vertical"} menuItems={["Menu 1", "Menu 2", "Menu 3"]} />
      <button className={"button"}>Click me!</button>
      <h2>t1</h2>
      <h2>t2</h2>
      <h2>t2</h2>
      <h2>t4</h2>
      <ProductCard age={17} name={"Taras"} number={1234567} />
      <ProductCard age={18} name={"Andriy"} />
      <ProductCard age={19} name={"Ivan"} />
      <ProductCard age={15} name={"Olena"} />
    </div>
  );
}

export default App;
