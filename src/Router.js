
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Logo from './components/Logo';
import JeuxVideo from './components/JeuxVideo';
import Manga from './components/Manga';
import ProduitsDerivés from './components/ProduitsDerivés';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Surtrois from './components/Surtrois'
import ArticleManagement from './Admin/ArticleManagement';
import News from './components/News';
import AdminPage from './Admin/AdminPage';
import LoginForm from './Admin/LoginForm';
import ApiHandler from './service/apihandler';
export const useApi = new ApiHandler(localStorage.getItem('accessToken') || null);

function Router() {
  const [isLogged, setIsLogged] = useState(Boolean(localStorage.getItem('accessToken')) || false);
  const fetchProfile = async () => {
    const response = await useApi.user.GetProfile()
    
    if (response && !response.error) {
      setIsLogged(true)
      return true

    }
  }

  useEffect(() => {
    if (isLogged) {
      fetchProfile();
    }
  }, [])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Home />} />
        <Route path="/Jeuxvideo" element={<JeuxVideo />} />
        <Route path="/Manga" element={<Manga />} />
        <Route path="/ProduitsDerivés" element={<ProduitsDerivés />} />
        <Route path="/Surtrois" element={<Surtrois />} />
        <Route path="/News" element={<News />} />
        <Route path="/AdminPage" element={<AdminPage fetchProfile={fetchProfile} />} />
        {isLogged ?
          <Route path="/AdminArticles" element={<ArticleManagement />} />
          :
          null
        }
      </Routes>
    </div>
  )
}

export default Router