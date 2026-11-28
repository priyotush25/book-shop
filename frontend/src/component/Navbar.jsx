
import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfile(false);
    setShowMenu(false);
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-sky-400">
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

          {/* Login / Profile */}
          <div className="hidden md:block relative">

            {!isLoggedIn ? (
              <Link
                to="/login"
                className="inline-block bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-lg font-medium transition"
              >
                Login
              </Link>
            ) : (
              <div>
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition"
                >
                  My Profile ▼
                </button>

                {showProfile && (
                  <div className="absolute right-0 mt-3 w-48 bg-white text-slate-800 rounded-lg shadow-xl overflow-hidden">

                    <p className="px-4 py-3 font-semibold border-b">
                      My Account
                    </p>

                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-slate-100"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/orders"
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

              <Link to="/" onClick={() => setShowMenu(false)}>
                Home
              </Link>

              <Link to="/books" onClick={() => setShowMenu(false)}>
                Books
              </Link>

              <Link to="/about" onClick={() => setShowMenu(false)}>
                About
              </Link>

              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setShowMenu(false)}
                  className="bg-sky-500 px-4 py-2 rounded-lg text-center"
                >
                  Login
                </Link>
              ) : (
                <>
                  <Link to="/profile" onClick={() => setShowMenu(false)}>
                    My Profile
                  </Link>

                  <Link to="/orders" onClick={() => setShowMenu(false)}>
                    My Orders
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="bg-red-600 px-4 py-2 rounded-lg"
                  >
                    Logout
                  </button>
                </>
              )}

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
