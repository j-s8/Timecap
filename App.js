import './App.css';
import { BrowserRouter as Router, Route,Routes, Link, withRouter } from 'react-router-dom';
import IndexPage from './IndexPage'; // Importing IndexPage from the same directory
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
