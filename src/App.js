import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Contact from './component/contact/Contact';
import Data from './component/data/Data';
import About from './component/about/About';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/data' element={<Data></Data>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
