import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Footer';
import Forsale from './Components/Forsale';
import ForRent from './Components/ForRent';
import ProjectSelling from './Components/ProjectSelling';

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        <Route path="/forsale" element={<Forsale />}></Route>
        <Route path="/forrent" element={<ForRent />}></Route>
        <Route path="/projectselling" element={<ProjectSelling />}></Route>
        </Routes>
      <Footer />
        
    </div>
   
  );
}

export default App;
