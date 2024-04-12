import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "Movie", link: "/movie" },
    { name: "Tv Shows", link: "/tv" },
    { name: "My List", link: "/mylist" },
  ];
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  return (
    <div>
      <nav className={`${isScrolled ? "scrolled" : ""}`}>
        <div>
          <div  className="logo" >
            <img src={logo} alt=""/>
          </div>
          <ul>
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`search${showSearch ? "show-search" : ""}`}>
          <button
            onFocus={() => setShowSearch(true)}
            onBlur={() => {
              if (!inputHover) {
                setShowSearch(false);
                s;
              }
            }}
          >
            <FaSearch />
          </button>
          <input
            type=""
            placeholder="Search"
            onMouseEnter={() => setInputHover(true)}
            onMouseLeave={() => setInputHover(false)}
            onBlur={() => {
              setShowSearch(false);
              setInputHover(false);
            }}
          />
        </div>
        <button onClick={() => signOut(firebaseAuth)}>
          <FaPowerOff />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
