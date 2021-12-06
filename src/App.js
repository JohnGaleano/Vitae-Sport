import logo from "./logo.svg";
import {Container} from 'react-bootstrap';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Login from "./components/login/login";
import Menu from './components/navbar/navbar';

import AppRouter from "./components/router/router";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Menu/>
      <AppRouter/>
      
    </div>
  );
}

export default App;
