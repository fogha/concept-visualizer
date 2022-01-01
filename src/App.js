import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Nav from './components/nav/nav';
import Variables from "./pages/Variables/variables";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Variables />} />
      </Routes>
    </Router>
  );
}

export default App;
