import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"
import {
    faUserCircle,
    faTachometerAlt,
    faBook,
    faCalendarAlt,
    faEnvelopeOpenText,
    faClock,
    faTv,
    faArrowCircleRight,
    faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconMap = {
    "fas fa-user-circle": faUserCircle,
    "fas fa-tachometer-alt": faTachometerAlt,
    "fas fa-book": faBook,
    "fas fa-calendar-alt": faCalendarAlt,
    "fas fa-envelope-open-text": faEnvelopeOpenText,
    "far fa-clock": faClock,
    "fas fa-tv": faTv,
    "fas fa-arrow-circle-right": faArrowCircleRight,
    "fas fa-question-circle": faQuestionCircle,
};

const links = [
    { label: "Account", to: "Account", icon: "fas fa-user-circle" },
    { label: "Dashboard", to: "Dashboard", icon: "fas fa-tachometer-alt" },
    { label: "Courses", to: "Courses", icon: "fas fa-book" },
    { label: "Calendar", to: "Calendar", icon: "fas fa-calendar-alt" },
    { label: "Inbox", to: "Inbox", icon: "fas fa-envelope-open-text" },
    { label: "History", to: "History", icon: "far fa-clock" },
    { label: "Studio", to: "Studio", icon: "fas fa-tv" },
    { label: "Commons", to: "Commons", icon: "fas fa-arrow-circle-right" },
    { label: "Help", to: "Help", icon: "fas fa-question-circle" }
];

function KanbasNavigation() {
    const {pathname} = useLocation();
    return (
        <nav id="sidePanel" className="col-md-3 col-lg-2 sidePanel">
            <div className="panelLogo">
                <img src="../../images/northeastern.jpg" alt="Company Logo" />
            </div>
            <ul className="nav flex-column">
                {links.map((link, index) => (
                    <li key={index} className="nav-item">
                        <Link to={link.to} className={`${pathname.includes(link.to) ? "active" : ""} nav-link`}>
                            <FontAwesomeIcon icon={iconMap[link.icon]} className={`${index === 0 ? "activeIcon" : "passiveIcon"} custom-icon-size`} />
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default KanbasNavigation;
