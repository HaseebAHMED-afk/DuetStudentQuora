import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import AskAQuestion from './Pages/AskAQuestion';
import Profile from './Pages/Profile'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import BuildProfile from './Pages/BuildProfile';
import QuestionPage from './Pages/QuestionPage';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/askaquestion' element={<AskAQuestion />} />
          <Route path='/:id' element={<QuestionPage />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/buildprofile' element={<BuildProfile />} />
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
