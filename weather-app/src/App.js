import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar';
import Home from "./components/Home"
import YourPlaces from './components/YourPlaces';

function App() {

  return (
    <BrowserRouter>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/yourplaces' element={<YourPlaces />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
