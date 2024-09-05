import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar';
import Home from "./components/Home"
import YourPlaces from './components/YourPlaces';
import CityDetails from './components/CityDetails';

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
          <Route path='/details/:cityName' element={<CityDetails />} />;
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
