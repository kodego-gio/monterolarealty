import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
    </div>
   
  );
}

export default App;
