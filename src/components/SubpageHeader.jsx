import React from 'react';
import { siteConfig } from '../config';

export default function SubpageHeader({ title }) {
  return (
    <div className="subpage-header-banner">
      <div className="subpage-header-overlay">
        <div className="subpage-header-content text-center">
          <h1 className="subpage-header-title">{title}</h1>
          <div className="header-divider-container">
            <img src="/img/divider.png" alt="divider" className="header-divider-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
