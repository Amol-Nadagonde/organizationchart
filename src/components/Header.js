import React from 'react';

function Header() {
  return (
    <header className="header">
        <section className="logo-section">
          <div className="logo colorwhite">
          </div>
        </section>
        <section className="search-section">
          <input 
              type="search"
              placeholder="Search"
          />
          <input 
              type="submit"
          />
        </section>
    </header>
  );
}

export default Header;
