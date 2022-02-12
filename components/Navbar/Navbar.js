import React from "react";
import Link from "next/link";
const Navbar = (props) => {
  return (
    <nav class="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top scrollednav py-0">
      <div class="container">
        <Link href="/">
          <a class="navbar-brand">
            <strong>Pranata's Blog</strong>
          </a>
        </Link>
        <button class="navbar-toggler collapsed" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarColor02">
          <ul class="navbar-nav ml-auto d-flex align-items-center">
            <li class="nav-item highlight">{/* <a class="nav-link">Search</a> */}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
