import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/HomeSection/Cart/Cart';
import CheckOut from './Components/HomeSection/CheckOut/CheckOut';
import Home from './Components/HomeSection/Home/Home';
import Buy from './Components/HomeSection/Purches/Buy';
import Login from './Components/Shared/Authentication/Login';
import RequireAuth from './Components/Shared/Authentication/RequireAuth';
import SignUp from './Components/Shared/Authentication/SignUp';
import NavBar from './Components/Shared/Nav/NavBar';

function App() {
  return (
    <div>
      {/* <Nav/> */}
      <NavBar>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/home' element={ <Home/> }></Route>
         <Route path='/buy/:productId' element={ <Buy/> }></Route>
         <Route path='/cart' element={ <RequireAuth>
            <Cart/>
         </RequireAuth> }></Route>
         <Route path='/checkOut' element={ <CheckOut/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/signUp' element={ <SignUp/> }></Route>
      </Routes>
      </NavBar>
      
    </div>
  );
}

export default App;
