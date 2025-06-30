import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./Components/Pages/Home"
import RootLayout from "./Components/Layout/RootLayout";
import Aboutus from "./Components/Pages/Aboutus";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<Aboutus/>}></Route>
      
    </Route>
  )
 );



function App() {
 
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
