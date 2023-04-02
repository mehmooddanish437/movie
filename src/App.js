import './App.scss';
import { getdata } from './utils/Api';
import {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { getconfigration, getGenres } from './store/homeSlice';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Details from './components/details/Details';
import Search from "./components/search/Search"
import PageNotFound from './components/pagenotfound/PageNotFound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './home/Home';
import Explore from './components/explore/Explore';
function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state)=>state.home)

  const React_API = "1eb0e956201c1188e31827c7ab2857b2"

 const fetchApiConfig = () => {
    getdata(`/configuration?api_key=1eb0e956201c1188e31827c7ab2857b2`).then((res) => {
        

        const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        };

        dispatch(getconfigration(url))
    });
};

const genresCall = async () => {
  let promises = [];
  let endPoints = ["tv", "movie"];
  let allGenres = {};

  endPoints.forEach((url) => {
      promises.push(getdata(`/genre/${url}/list?api_key=1eb0e956201c1188e31827c7ab2857b2`));
  });

  const data = await Promise.all(promises);
  
  data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
  });

  dispatch(getGenres(allGenres));
};
  


  useEffect(()=>{
    fetchApiConfig()
    genresCall()

  },[])
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:type/:id' element={<Details/>}/>
      <Route path='/search/:query' element={<Search/>}/>
      <Route path='/explore/:type' element={<Explore/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
