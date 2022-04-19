import React from 'react';
import{
  BrowserRouter,
Routes,
Route,
} from "react-router-dom";
import Dashboard from './component/pages/Dashboard';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route  path = "/dashboard" element = {<PrivateRoute><Dashboard /></PrivateRoute>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
