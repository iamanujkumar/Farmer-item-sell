import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import { useAppContext } from "./contexts/AppContext";
import Home from './Pages/Home'
import AddItem from "./Pages/AddItemPage/AddItem";
import Profile from "./Pages/Profile/Profile";
import NoPage from "./Pages/NoPage/NoPage";
import AllProduct from "./Pages/AllProduct/AllProduct";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import Mandi_Bhav from "./Pages/Mandi_Bhav/Mandi_Bhav";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";

function App() {

  const {isLoggedIn} = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <Home/>
        </Layout>} />
        <Route path="/register" element={<Layout><Register/></Layout>} />
        <Route path="/sign-in" element={<Layout><SignIn/></Layout>}/>
        <Route path="/productInfo/:id" element={<Layout><ProductInfo/></Layout>} />
        <Route path="/cart" element={<Layout><Cart/></Layout>} />
        <Route path="/*" element={<NoPage/>}/>
        <Route path="/products" element={<Layout><AllProduct/></Layout>}/>
        <Route path="/mandi-bhav" element={<Layout><Mandi_Bhav/></Layout>}/>
        <Route path="/aboutus" element={<Layout><About/></Layout>}/>
       
        {isLoggedIn && (
          <>
          <Route 
          path="/add-item"
          element={
            <Layout>
              <AddItem/>
            </Layout>
          }/>

<Route 
          path="/add-cart"
          element={
            <Layout>
              <Cart/>
            </Layout>
          }/>

           <Route 
        path="/profile"  
       element={
          <Layout>
          <Profile />
          </Layout>
} 
/>

          </>


        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
