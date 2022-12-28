import Navbar from './Navbar';
import UrlShorter from '../pages/UrlShorter';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ShortUrl from '../pages/ShortUrl';
import Links from '../pages/Links';
import Redirect from '../Redirect';
import AuthContext from '../context/user/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';



function App() {

  const {user} = useContext(AuthContext)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route exact path='/' element={user ? <UrlShorter/>:<Navigate to="/Login"/>}/>
            <Route exact path='/ShortUrl' element={user ? <ShortUrl/> : <Navigate to="/Login"/>}/>
            <Route exact path='/Links' element={user ? <Links/> : <Navigate to="/Login"/>}/>
            <Route exact path='/Login' element={!user ? <Login/> : <Navigate to="/"/>}/>
            <Route exact path='/Register' element={!user ? <Register/> : <Navigate to="/"/>}/>
            <Route exact path='/:shortURL' element={<Redirect/>}/>

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
