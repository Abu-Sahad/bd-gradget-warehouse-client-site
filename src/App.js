import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import SingleItem from './Pages/SignleItem/SingleItem';
import AddItem from './Pages/AddItem/AddItem';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Shared/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/laptop/:id' element={<SingleItem></SingleItem>} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='add-item' element={<RequireAuth>
          <AddItem></AddItem></RequireAuth>}></Route>
        <Route path='manage-item' element={<RequireAuth>
          <ManageItem></ManageItem>
        </RequireAuth>}></Route>
        <Route path='myItems' element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>} ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
