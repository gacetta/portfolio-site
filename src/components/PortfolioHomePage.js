import React from "react";
import { Link } from 'react-router-dom'

const PortfolioHomePage = () => (
  <div>
    <h2>Projects</h2>
    <p>A collection of projects I've completed:</p>
    <Link to='/portfolio/ipsum_generator'>Ipsum Generator</Link>
    <Link to='/portfolio/tiddlywinks'>Tiddlywinks</Link>
  </div>
)

export default PortfolioHomePage;