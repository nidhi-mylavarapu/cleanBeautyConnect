import { AppProps } from "next/app"
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import { useContext } from "react";

function App() {

  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element=<Home /> />
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

