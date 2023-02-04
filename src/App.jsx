
import './App.css';
import Header from './components/Header.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import { MovieDetail } from './pages/MovieDetail';

export default function App() {
  return (
    <div className="App">

      <Router>
        <header>
          <Link to="/"><Header /></Link>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/movies/:movieId" element={<MovieDetail />}>Movie</Route>
          </Routes>
        </main>
      </Router>

    </div>
  );
}
