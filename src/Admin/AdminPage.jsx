import React, { useState } from 'react';
import LoginForm from './LoginForm'; // Créez ce composant pour le formulaire de connexion
import ArticleManagement from './ArticleManagement'; // Créez ce composant pour le formulaire de création d'articles

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Admin Dashboard</h1>
          <ArticleManagement />
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default AdminPage;