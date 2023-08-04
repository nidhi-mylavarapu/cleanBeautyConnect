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
import PageNotFound from "./pages/pageNotFound";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import { useContext } from "react";

function App({ Component, pageProps }: AppProps) {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <AuthContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
      
  )
}

export default App
