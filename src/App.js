// import logo from './logo.svg';
import './App.css';
// Components
import FruitContainer from './components/FruitContainer';
// fruits is undefined unless we pass it down:
function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange', 'pomengranate', 'grapefruit', 'mango', 'raspberry', 'blackberry', 'strawberry', 'kiwi'];
  return (
    <div className="App">
      <FruitContainer fruits={fruits}/>
    </div>
  );
}
// you can use console.log to compare state v. props and how state changes!
export default App;
