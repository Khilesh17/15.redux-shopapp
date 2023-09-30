import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path='/' element={<HomePage/> } />
        <Route path='/cart' element={<CartPage/> } />
      </Routes>
    </div>


  );
}

export default App;
