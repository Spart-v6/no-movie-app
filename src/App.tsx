import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MoviePage from './components/MoviePage';
import Movies from './pages/Movies';
import Error from './pages/Error';
import Search from './pages/Search';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path='movie/:id' element={<Movies/>}></Route>
              <Route path='movies/:type' element={<MoviePage/>}></Route>
              <Route path='searchMovie/:search' element={<Search/>}></Route>
              <Route path='/*' element={<Error/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
