import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import DashboardPage from './pages/DashboardPage';

import LoginPage from './pages/auth/LoginPage';
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage';
import UserManagement from './pages/UserManagement';
import TherapistManagement from './pages/TherapistManagement';
import ContentManagement from './pages/ContentManagement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<DashboardPage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/reset-password' element={<ResetPassword />} />
        <Route exact path='/profile' element={<ProfilePage />} />
        <Route exact path='/change-password' element={<ChangePasswordPage />} />
        <Route exact path='/preferences' element={<UserPreferencesPage />} />
    
        <Route exact path='/admin/users' element={<UserManagement />} />
        <Route exact path='/admin/therapists' element={<TherapistManagement />} />
        <Route exact path='/admin/content' element={<ContentManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
