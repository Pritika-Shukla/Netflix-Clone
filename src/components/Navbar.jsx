import React, { useState } from "react";
import styled from "styled-components";
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
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="list">
          {links.map(({ name, link }) => (
            <li key={name}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className={`search${showSearch ? "show-search" : ""}`}>
          <button
            onFocus={() => setShowSearch(true)}
            onBlur={() => {
              if (!inputHover) {
                setShowSearch(false);
              }
            }}
          >
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search"
            onMouseEnter={() => setInputHover(true)}
            onMouseLeave={() => setInputHover(false)}
            onBlur={() => {
              setShowSearch(false);
              setInputHover(false);
            }}
          />
        </div>
        <button onClick={() => signOut(firebaseAuth)} className="sign">
          <FaPowerOff />
        </button>
      </nav>
    </Container>
  );
}

export default Navbar;


// Define the Container styled-component
const Container = styled.div`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
  }

  .logo img {
    height: 4rem;
  }

  .sign {
    color: #e50914;
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right:1rem;
  }

  .logo {
    height: 29px;
    width: 12px;
  }

  .list {
    list-style-type: none;
    display: flex;
    gap: 2rem;
    margin-top:2rem;
  }

  li {
    a {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
    }
  }
`;