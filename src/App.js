import './App.css';
import Videopage from './pages/Videopage';
import Homepage from './pages/Homepage';
import Searchpage from './pages/Searchpage';
import Test from './components/Test';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (

    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='video/:MovieID' element={<Videopage />} />
      <Route path='searchresult/:query' element={<Searchpage />} />
    </Routes>
  );
}

export default App;
