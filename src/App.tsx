import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MoviePage from './components/MoviePage';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path='movie/:id' element={<h1>Movie detail page</h1>}></Route>
              <Route path='movies/:type' element={<MoviePage/>}></Route>
              <Route path='/*' element={<h1>Error page</h1>}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
