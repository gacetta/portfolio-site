import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';
import ContactPage  from '../components/ContactPage'
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioHomePage from '../components/PortfolioHomePage'
import PortfolioItemPage from '../components/PortfolioItemPage';
import Header from '../components/Header'

const AppRouter = () => (
  <Router>
    <div>
      <Header />
    </div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/portfolio' element={<PortfolioHomePage />} />
      <Route path='/portfolio/:id' element={<PortfolioItemPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRouter;