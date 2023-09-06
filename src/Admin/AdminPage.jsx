import React, { useState } from 'react';
import LoginForm from './LoginForm'; 
import ArticleManagement from './ArticleManagement'; 


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