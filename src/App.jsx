import { useState } from "react";
import React from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import PageTitle from "./components/PageTitle";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/ressurser.js';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/html" element={<><PageTitle title="HTML" /><Resources category="html" /></>} />
        <Route path="/css" element={<><PageTitle title="CSS" /><Resources category="css" /></>} />
        <Route path="/javascript" element={<><PageTitle title="JAVA SCRIPT" /><Resources category="javascript" /></>} />
        <Route path="/react" element={<><PageTitle title="REACT" /><Resources category="react" /></>} />
        <Route path="/sanity" element={<><PageTitle title="SANITY" /><Resources category="headless-cms" /></>} />
        </Routes>
        </Layout>
        </Router>
  );
}

export default App;
