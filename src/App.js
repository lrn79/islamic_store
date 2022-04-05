import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Dashbord from './Components/Dashbord/Dashbord';
import Home from './Components/Home/Home';
import Navbar from './Components/navbar/Navbar';
import Notfound from './Components/Notfound/Notfound';
import Reviews from './Components/Reviews/Reviews';



function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
