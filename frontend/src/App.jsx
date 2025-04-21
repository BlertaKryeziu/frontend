import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Auth, Orders} from "./pages";
import Header from "./components/shared/Header";



function App() {
  

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
