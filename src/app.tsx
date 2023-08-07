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
import { AuthContextProvider } from "./context/AuthContext";

function App() {

  
  return(
    <AuthContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element=<Home /> />
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
    
  )
}

export default App;

