import React, { useState } from "react";
import "./Header.css";

// Material UI icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

// Local assets
import logo from "../../assets/Netflix.svg";
import avatar from "../../assets/user.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nf-header">
      <div className="nf-header-inner">
        {/* Left side */}
        <div className="nf-left">
          {/* Burger for mobile */}
          <button
            className="nf-burger"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>

          {/* Logo */}
          <img src={logo} alt="Netflix Logo" className="nf-logo" />

          {/* Nav links */}
          <nav className={`nf-nav ${mobileOpen ? "open" : ""}`}>
            <a href="#">Home</a>
            <a href="#">TV Shows</a>
            <a href="#">Movies</a>
            <a href="#">New & Popular</a>
            <a href="#">My List</a>
          </nav>
        </div>

        {/* Right side */}
        <div className="nf-right">
          <button className="nf-icon">
            <SearchIcon />
          </button>
          <button className="nf-kids">KIDS</button>
          <button className="nf-icon">
            <NotificationsIcon />
          </button>

          <div className="nf-profile">
            <img src={avatar} alt="User Avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}
