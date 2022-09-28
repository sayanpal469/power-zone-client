import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/HomeSection/Cart/Cart';
import Home from './Components/HomeSection/Home/Home';
import Buy from './Components/HomeSection/Purches/Buy';
import Purches from './Components/HomeSection/Purches/Purches';
import Login from './Components/Shared/Authentication/Login';
import RequireAuth from './Components/Shared/Authentication/RequireAuth';
import SignUp from './Components/Shared/Authentication/SignUp';
import Dashboard from './Components/Shared/Dashboard/Dashboard';
import MyOrders from './Components/Shared/Dashboard/MyOrder/MyOrders';
import MyProfile from './Components/Shared/Dashboard/MyProfile';
import Nav from './Components/Shared/Nav/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/home' element={ <Home/> }></Route>
        <Route path='/purches/:productId' element={ 
          <RequireAuth>
            <Purches/>
          </RequireAuth>
         }></Route>
         <Route path='/buy/:productId' element={ <Buy/> }></Route>

         <Route path='/cart' element={ <Cart/> }></Route>

         {/* <Route path='/dashBoard' element={ <RequireAuth><Dashboard></Dashboard></RequireAuth> }>
          <Route index element={ <MyProfile/> }></Route>
          <Route path='myOrders' element={ <MyOrders/> }></Route>
         </Route> */}

        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/signUp' element={ <SignUp/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
