import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar';
import Home from "./components/Home"
import YourPlaces from './components/YourPlaces';

function App() {


  // const [cityData, setCityData] = useState({})

  // const handleSearch = (query) => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=d7b26fd7ee9ec6be4f7218dc0343c22e`
  //   fetch(url)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json()
  //       } else {
  //         throw new Error('City not found')
  //       }
  //     })
  //     .then((data) => {
  //       setCityData(data);
  //     })
  //     .catch((err) => {
  //       console.log('Errore', err)
  //       setCityData(null);
  //     })
  // }


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
