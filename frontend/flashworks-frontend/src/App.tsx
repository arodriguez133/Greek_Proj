// src/components/App.tsx
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import FlashList from './Components/Flashlist';
import QueryLogList from './Components/QueryLogList';
import LoginButton from './Components/LoginButton';
import AdminDashboard from './Components/AdminDashboard';
import PrivateRoute from './Components/PrivateRoute';
import { useAuth0 } from '@auth0/auth0-react';
import Menu from './Components/Menu';
import Hamburger from './Components/Hamburger';
import { MenuProvider } from './Components/MenuContext';

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
      <MenuProvider>
        <Hamburger/>
        <Menu/>
      </MenuProvider>
        {isAuthenticated?(
          <>
          <Routes>
            <Route path="/admin" element={<PrivateRoute component={AdminDashboard}/>}/>
            <Route path="/" element={
              <>
              <FlashList />
              </>
            }/>
          </Routes>
          </>
          ) : (
            <>
            <LoginButton />
            </>
          )}
      </div>
    </Router>
  );
};

export default App;
