import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import { useAppContext } from "./contexts/AppContext";
import Home from './Pages/Home'
import AddItem from "./Pages/AddItemPage/AddItem";

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

        {isLoggedIn && (
          <>
          <Route 
          path="/add-item"
          element={
            <Layout>
              <AddItem/>
            </Layout>
          }/>

          </>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;