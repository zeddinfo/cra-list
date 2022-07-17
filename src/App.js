
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OnBoarding from './pages/OnBoarding';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<OnBoarding/>}/>
          <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
