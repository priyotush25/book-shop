
import React, { useState } from "react";
import { Link } from "react-router";

import Container from "./Container";
import Button from "./Button";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfile(false);
    setShowMenu(false);
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <Container className="py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-sky-400"
          >
            BookStore
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link to="/" className="hover:text-sky-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/books" className="hover:text-sky-400 transition">
                Books
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-sky-400 transition">
                About
              </Link>
            </li>
          </ul>

          {/* Desktop Login / Profile */}
          <div className="hidden md:block relative">

            {!isLoggedIn ? (
              <Button
                onClick={() => (window.location.href = "/login")}
                className="px-5 py-2"
              >
                Login
              </Button>
            ) : (
              <div>
                <Button
                  variant="secondary"
                  onClick={() => setShowProfile(!showProfile)}
                  className="bg-slate-700 text-white hover:bg-slate-600"
                >
                  My Profile ▼
                </Button>

                {showProfile && (
                  <div className="absolute right-0 mt-3 w-48 bg-white text-slate-800 rounded-lg shadow-xl overflow-hidden z-50">

                    <p className="px-4 py-3 font-semibold border-b">
                      My Account
                    </p>

                    <Link
                      to="/profile"
                      onClick={() => setShowProfile(false)}
                      className="block px-4 py-2 hover:bg-slate-100"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/orders"
                      onClick={() => setShowProfile(false)}
                      className="block px-4 py-2 hover:bg-slate-100"
                    >
                      My Orders
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>

                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-2xl"
            aria-label="Toggle navigation menu"
            aria-expanded={showMenu}
          >
            ☰
          </button>

        </div>

        {/* Mobile Navigation */}
        {showMenu && (
          <div className="md:hidden mt-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col gap-4">

              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>

              <Link to="/books" onClick={closeMobileMenu}>
                Books
              </Link>

              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>

              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="block"
                >
                  <Button className="w-full">
                    Login
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/profile" onClick={closeMobileMenu}>
                    My Profile
                  </Link>

                  <Link to="/orders" onClick={closeMobileMenu}>
                    My Orders
                  </Link>

                  <Button
                    variant="danger"
                    onClick={handleLogout}
                    className="w-full"
                  >
                    Logout
                  </Button>
                </>
              )}

            </div>
          </div>
        )}

      </Container>
    </nav>
  );
};

export default Navbar;
