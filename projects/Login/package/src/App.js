// src/App.js
import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList.jsx';
import AdminRouter from './components/AdminRouter.jsx';
import NotFound from './Pages/NotFound.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import FistLvlprivateRoute from './components/FistLvlprivateRoute.jsx';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FistLvlprivateRoute><ProductList /></FistLvlprivateRoute>} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={
          <Suspense fallback={<h1>Loading....</h1>}>
            <AdminRouter />
          </Suspense>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
