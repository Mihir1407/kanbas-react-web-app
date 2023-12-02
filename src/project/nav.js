import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const navItems = [
        { label: "Home", path: "home", word: "home" },
        { label: "Search", path: "search", word: "search" },
        { label: "Sign In", path: "signin", word: "signin" },
        { label: "Sign Up", path: "signup", word: "signup" },
        { label: "Account", path: "account", word: "account" },
    ];

    const isCurrentPage = (word) => pathname.includes(word);

    return (
        <nav className="navbar navbar-light bg-white">
            <ul className="nav flex-column">
                {navItems.map((item, index) => (
                    <li key={index} className={`nav-item border ${isCurrentPage(item.word) ? "bg-primary" : ""}`}>
                        <Link className={`nav-link text-black ${isCurrentPage(item.word) ? "text-white" : ""}`} to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
