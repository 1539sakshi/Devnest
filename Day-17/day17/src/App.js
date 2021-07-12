import './App.css';
import Item from "./componenets/Item"
function App() {

  return (
    <div className="container">
      <h1>Calorie Read Only</h1>
    <div className="app">
      <Item name ="Pizza" cal ="56"/>
      <Item name ="Burger" cal = "76"/>
      <Item name ="Coke" cal = "20"/>
      <Item name ="Egg Cheese Chowmine" cal = "30"/>
      <Item name ="Fried Rice" cal ="90"/>
      <Item name ="Lassania" cal = "56"/>
      <Item name ="Pani puri" cal = "10"/>

    </div>
    </div>
  );
}

export default App;