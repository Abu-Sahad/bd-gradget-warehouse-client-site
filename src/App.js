import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import SingleItem from './Pages/SignleItem/SingleItem';
import AddItem from './Pages/AddItem/AddItem';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/laptop/:id' element = {<SingleItem></SingleItem>} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='add-item' element={<AddItem />} />

      </Routes>

    </div>
  );
}

export default App;
