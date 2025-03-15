import "../styles/App.scss";
import React from 'react';
import { resources } from './ressurser.js';

function Resources({ category }) {
  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <div className="white-box">
      <div id="innhold">
        {filteredResources.map((resource, index) => (
          <article key={index}>
            <a href={resource.url} target="_blank" rel="b">
            {resource.title}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Resources;