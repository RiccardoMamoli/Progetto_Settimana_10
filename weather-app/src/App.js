import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar';
import Home from "./components/Home"
import CustomSearchBar from './components/CustomSearchBar';

function App() {
  return (
    <BrowserRouter>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <CustomSearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
