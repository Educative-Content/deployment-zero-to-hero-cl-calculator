import './App.css';
import Calculator from './components/Calculator';

function App() {
  const username= process.env.REACT_APP_USERNAME;
  console.log(username)
  return (
  <>
  <div className='main-heading'>Welcome, {username ? username : "Stranger"}</div>
   <Calculator />
  </>
  );
}

export default App;
