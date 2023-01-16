import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import MoviesGrid from "./components/MoviesGrid.js";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import { MovieDetail } from './pages/MovieDetail';

function App() {
  return (
    <div className="App">

      <Router>
        <header>
          <Link to="/"><Header /></Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movies/:movieId" element={<MovieDetail />}>Movie</Route>
          </Routes>
        </main>
      </Router>


      {/* <MoviesGrid /> */}
    </div>
  );
}

export default App;
