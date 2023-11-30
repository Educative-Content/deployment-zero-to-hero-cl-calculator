import './App.css';
import Calculator from './components/Calculator';

function App() {
  const username= process.env.REACT_APP_USERNAME;
  return (
  <>
  <div className='main-heading'>Welcome, {username ? username : "Stranger"}</div>
   <Calculator />
   <footer>Calculator version 1</footer>
  </>
  );
}

export default App;
