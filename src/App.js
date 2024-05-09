import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/Sign-In'
import Count from './pages/Count';
import Bootstrap from './pages/Bootstrap';
import Effect from './pages/Effect';


function App() {
  return (
    <BrowserRouter>
      
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/sign-in'element={<SignIn/>}/>
          <Route path='/count' element={<Count/>}/>
          <Route path='/boot' element={<Bootstrap/>}/>
          <Route path='/effect' element={<Effect/>}/>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
