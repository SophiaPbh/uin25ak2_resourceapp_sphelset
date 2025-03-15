import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav id="kategorier">
      <Link to="/html"><button>HTML</button></Link>
      <Link to="/css"><button>CSS</button></Link>
      <Link to="/javascript"><button>JavaScript</button></Link>
      <Link to="/react"><button>React</button></Link>
      <Link to="/sanity"><button>Sanity</button></Link>
    </nav>
  );
}

export default Nav;