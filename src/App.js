import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Missions from './routes/Missions';
import Rockets from './routes/Rockets';
import Profile from './routes/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='missions' element={<Missions />}></Route>
          <Route path='rockets' element={<Rockets />}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
