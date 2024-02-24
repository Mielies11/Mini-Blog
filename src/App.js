import logo from './logo.svg';
//import './App.css';
import Navbar from './NavBar';
import HomePage from './Home';

function App() {

  const title = "Welcome to the new blog!";
  const likes = 50;
  return (
    <div className="App">
      <Navbar></Navbar>
     <div className= "content"> 
      <HomePage></HomePage>
     </div>
    </div>
  );
}

export default App;  // Exporting the App component