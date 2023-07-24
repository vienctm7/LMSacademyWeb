import { Routes, Route } from "react-router-dom";
import Login from "./components/Page/Login";
import Signup from "./components/Page/Signup";
import Footer from "./components/layout/Footer";
import Lotrinh from "./components/Page/Lotrinh";
import Khoahoc from "./components/Page/Khoahoc";
import Baiviet from "./components/Page/Baiviet";
import CourseDetail from "./components/Page/CourseDetail";
import Home from "./components/layout/Home";
import HomeProducts from "./components/addmin/HomeProducts";
import AddProduct from "./components/addmin/AddProduct";
import EditProduct from "./components/addmin/EditProduct";
import Lotrinhkhoahoc from "./components/Page/Lotrinhkhoahoc";
import "./App.css";
import HomeUsers from "./components/addmin/HomeUsers";

function App() {
  return (
    <Routes>
      <Route path="/lotrinh/:id" element={<Lotrinhkhoahoc />}></Route>
      <Route path="/adminUsers" element={<HomeUsers />}></Route>
      <Route path="/editProduct/:id" element={<EditProduct />}></Route>
      <Route path="/addProduct" element={<AddProduct />}></Route>
      <Route path="/adminCourse" element={<HomeProducts />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/lotrinh" element={<Lotrinh />}></Route>
      <Route path="/khoahoc" element={<Khoahoc />}></Route>
      <Route path="/baiviet" element={<Baiviet />}></Route>
      <Route path="/khoahoc/course" element={<CourseDetail />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
