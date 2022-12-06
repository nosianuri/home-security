import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Thanks from './pages/Thanks/Thanks';
import NotFound from './pages/Notfound/NotFound';
import Navbar from './components/Navbar';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Navbar />
        <TopHeader />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/thanks' element={<Thanks />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
