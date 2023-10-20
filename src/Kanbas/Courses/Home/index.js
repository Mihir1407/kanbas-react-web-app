import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheckCircle, faFileCode, faPencilSquare, faBullseye, faBarChart, faBullhorn, faTimes, faCircle, faCalendarAlt, faDumbbell, faBell } from '@fortawesome/free-solid-svg-icons';
import "./style.css"
import ModuleList from '../Modules/ModuleList';

function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='rcontent'>
            <ModuleList />
            {/* {windowWidth > 1500 ? ( */}
            <div className="far-right-content">
                <span>Course Status</span>
                <div className="button-group-1">
                    <button className="btn btn-secondary color-change">
                        <FontAwesomeIcon icon={faBan} /> Unpublish
                    </button>
                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faCheckCircle} /> Published
                    </button>
                </div>
                <div className="button-group-2">
                    <button className="btn btn-secondary color-change">
                        <FontAwesomeIcon icon={faFileCode} /> Import Existing Content
                    </button>
                    <button className="btn btn-secondary color-change">
                        <FontAwesomeIcon icon={faPencilSquare} /> Import from Commons
                    </button>
                    <button className="btn btn-secondary color-change">
                        <FontAwesomeIcon icon={faBullseye} /> Choose Home Page
                    </button>
                    <button className="btn btn-secondary color-change">
                        <FontAwesomeIcon icon={faBarChart} /> View Course Stream
                    </button>
                    <button className="btn btn-secondary color-change">
                        <FontAwesomeIcon icon={faBullhorn} /> New Announcement
                    </button>
                    <button className="btn btn-secondary color-change">
                        <FontAwesomeIcon icon={faBarChart} /> New Analytics
                    </button>
                    <button className="btn btn-secondary color-change">
                        <FontAwesomeIcon icon={faBell} />View Course Notifications
                    </button>
                </div>
                <div className="todo">
                    <span>To-Do</span>
                    <hr className="todo-hr" />
                    <div className="grade-info">
                        <FontAwesomeIcon icon={faTimes} className="close-icon ellipse-color" />
                        <div className="table">
                            <div className="table-row">
                                <div className="icon-cell">
                                    <FontAwesomeIcon icon={faCircle} />
                                </div>
                                <div className="text-cell">
                                    <a href="#" className="grade">Grade A1 - ENV + HTML</a>
                                    <br />
                                    <small className="grade-small">100 points • Sep 18 at 11:59 pm</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calendar">
                    <span>Coming Up</span>
                    <div className="calendar-icon-text">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <a href="#" className="view-calendar">View Calendar</a>
                    </div>
                </div>
                <hr className="todo-hr" />
                <div className="cal-info">
                    <div className="cal-row">
                        <FontAwesomeIcon icon={faCalendarAlt} className="cal-icon" />
                        <div className="text">
                            <a href="#" className="grade">Lecture</a>
                            <br />
                            <small className="grade-small">CS5610.12631.202410<br />Sep 11 at 11:45am</small>
                        </div>
                    </div>
                </div>
            </div>
            {/* ) : null} */}
        </div>
    );
}

export default Home;
