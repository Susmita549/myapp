import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";



export const Navbar = () => {
  const { token ,handleLogout} = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        {/* keep all the NavLinks here */}
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/books"}>Books</NavLink>
        {token ? (
           <NavLink onClick={handleLogout} to={"/logout"}>Logout</NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
        
      </nav>
    </>
  );
};