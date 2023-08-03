import './App.css';
import React, { useState } from "react";
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import CreateNotificationPage from './pages/CreateNotificationPage';
import NotificationPage from './pages/NotificationPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { UserContext } from './utility/UserContext';
import AccountPage from './pages/AccountPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {
  const [savedUser, setSavedUser] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ savedUser, setSavedUser }}>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/notifications/create" element={<CreateNotificationPage />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-account" element={<AccountPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password/:id/:token" element={<ResetPasswordPage />} />
          </Routes>
        </Router >
      </UserContext.Provider>
    </div>
  );
}

export default App;
