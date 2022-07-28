import React from 'react';
import Logo from './logoHenry.png'
import SearchBar from '../Nav/SearchBar';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <>
      <header>
        <img src={Logo} alt="Henry-Logo" id='logoHenry'/>
        <h1>Henry-Wheather App</h1>
        <SearchBar onSearch={onSearch}></SearchBar>
      </header>
    </>
  );
};

export default Nav;
