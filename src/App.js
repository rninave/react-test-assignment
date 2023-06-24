import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/style.scss';
import Homepage from './page/Homepage';
import FriendProfile from './page/FriendProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/friend" element={<FriendProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
