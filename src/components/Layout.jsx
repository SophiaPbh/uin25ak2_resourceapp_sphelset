import React from 'react';
import Nav from './Nav.jsx';

function Layout({ children }) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
}

export default Layout;