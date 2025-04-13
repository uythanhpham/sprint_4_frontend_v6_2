'use client';

import './SearchBar.css';
import {Search, Funnel} from 'lucide-react'
export default function SearchBar() {
  return (
    <div className="searchbar-wrapper">
      {/* Search input + filter icon */}
      <div className="searchbar-container">
        <div className="searchbar-inner" role="search">
          <input
            type="text"
            placeholder="Search clothes..."
            className="searchbar-input"
            aria-label="Search clothes"
          />
          <span className="searchbar-icon" role="button" tabIndex={0} title="Search">
          <Search size={30} />
          </span>
        </div>

        <span
          className="searchbar-filter"
          role="button"
          tabIndex={0}
          title="Filter options"
        >
          <Funnel size={35} color=" #6E00FF"/>
        </span>
      </div>
    </div>
  );
}
