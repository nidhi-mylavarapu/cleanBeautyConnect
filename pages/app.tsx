import { AppProps } from "next/app"
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "./home";
import Register from "./register";
import Login from "./login";

function App({ Component, pageProps }: AppProps) {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
