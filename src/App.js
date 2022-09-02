import './App.css';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import CreateNotificationPage from './pages/CreateNotificationPage';
import NotificationPage from './pages/NotificationPage';

function App() {

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/notifications/create" element={<CreateNotificationPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
