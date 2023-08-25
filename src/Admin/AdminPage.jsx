import React, { useState } from 'react';
import LoginForm from './LoginForm'; // Créez ce composant pour le formulaire de connexion
import ArticleManagement from './ArticleManagement'; // Créez ce composant pour le formulaire de création d'articles


const AdminPage = (props) => {
  const { fetchProfile } = props


  return (
    <div>
      <h1>Admin Dashboard</h1>
      <LoginForm fetchProfile={fetchProfile} />
    </div>
  )
}


export default AdminPage;