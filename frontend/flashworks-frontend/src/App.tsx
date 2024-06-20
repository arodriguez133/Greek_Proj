// src/components/App.tsx
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import FlashList from './Components/Flashlist';
import QueryLogList from './Components/QueryLogList';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import AdminDashboard from './Components/AdminDashboard';
import PrivateRoute from './Components/PrivateRoute';
import { useAuth0 } from '@auth0/auth0-react';
import AdminButton from './Components/AdminButton';

const App: React.FC = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();

  console.log('isAuthenticated:', isAuthenticated);
  console.log('isLoading:', isLoading);
  console.log('error:', error);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Router>
      <div>
        {isAuthenticated?(
          <>
          <LogoutButton />
          <AdminButton />
          <Routes>
            <Route path="/admin" element={<PrivateRoute component={AdminDashboard}/>}/>
            <Route path="/" element={
              <>
              <FlashList />
              <QueryLogList />
              </>
            }/>
          </Routes>
          </>
          ) : (
            <LoginButton />
          )}
      </div>
    </Router>
  );
};

export default App;
