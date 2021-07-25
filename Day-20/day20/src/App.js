import './index.css';
import Container from './components/Container';


const data = [{
  name: "Pizza",
  cals: 56
},
{
  name: "Burger",
  cals: 69
},
{
  name: "Momo",
  cals: 300
},
{
  name: "Coke",
  cals: 600
},
{
  name: "Shake",
  cals: 100
},
{
  name: "Sweet",
  cals: 200
},
{
  name: "Chocolates",
  cals: 350
}];


function App() {
    return (
        <div className="page">
            <Container list={data} />
        </div>
    );
}

export default App;