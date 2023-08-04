import { AppProps } from "next/app"
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

