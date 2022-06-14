import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Home/Service/Service';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Education from './Pages/Home/Education/Education';
import ContactMe from './Pages/ContactMe/ContactMe';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/education' element={<Education></Education>}></Route>
          <Route path='/contactMe' element={<ContactMe></ContactMe>}></Route>
        </Routes>   

        <Footer></Footer>
    </div>
  );
}

export default App;
