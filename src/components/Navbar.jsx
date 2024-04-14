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
        <div className={`search${showSearch ? " show-search" : ""}`}>
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
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 1000;
BACKGROUND-COLOR:BLACK;
opacity:.9;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
   height:5rem;
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
  }
button{
  background-color: transparent;
  color:white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
  .list {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .search {
    display: flex;
    align-items: center;
    margin-left: auto; /* Pushes the search box and input area to the right */
  }

  .search button {
    margin-right: 0.5rem; /* Adjust the margin between button and input */
  }
  input{
    visibility: hidden;
    transition: 0.3s ease-in-out;
    background-color: transparent;
    border: none;
    color: white;
    &:focus {
      outline: none;
    }
  }
    margin-right: 18px;
  }

  li {
    a {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
    }
  }
  .show-search {
    border: 1px solid white;
    input {
      width: 100%;
      opacity: 1;
      visibility: visible;
      padding: 0.3rem;
      outline:none;
    }
  }
`;