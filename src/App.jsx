import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './components/Register';
import LoginForm from './components/Login';
import Product from './components/Products';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginForm/>} />
            <Route path="/signup" element={<Register/>} />
            <Route path="/product" element={<Product />} /> 
       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
