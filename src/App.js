import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeSection/Home/Home';
import Purches from './Components/HomeSection/Purches/Purches';
import Login from './Components/Shared/Authentication/Login';
import SignUp from './Components/Shared/Authentication/SignUp';
import Nav from './Components/Shared/Nav/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/home' element={ <Home/> }></Route>
        <Route path='/purches/:productId' element={ <Purches/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/signUp' element={ <SignUp/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
