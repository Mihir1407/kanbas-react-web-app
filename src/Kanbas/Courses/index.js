import db from "../../Kanbas/Database";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { faBars, faGlasses } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
const API_BASE = process.env.REACT_APP_API_BASE;
function Courses({ courses }) {
    const URL = `${API_BASE}/courses`;
    const { courseId } = useParams();
    const location = useLocation();
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);
    if (courseId) {
        const pathnameParts = location.pathname.split("/");
        const activeBreadcrumb = decodeURIComponent(pathnameParts.pop());
        const assignment = decodeURIComponent(pathnameParts.pop());
        return (
            <div className="courses container-fluid">
                <main role="main" className="col-md-12">
                    <div className="contentArea">
                        <div className="topArea">
                            <div className="menuIconArea">
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div className="profileNameArea">
                                <nav aria-label="breadcrumb" style={{ marginTop: "20px" }}>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <div className="passiveIcon">
                                                {course ? course.name : courseId}
                                            </div>
                                        </li>
                                        {assignment === "Assignments" ? (
                                            <li className="breadcrumb-item passiveIcon">
                                                Assignments
                                            </li>
                                        ) : ''}
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {activeBreadcrumb}
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <button className="btn btn-secondary ms-auto color-change">
                                <FontAwesomeIcon icon={faGlasses} className="icon-space2" /> Student View
                            </button>
                        </div>
                        <hr />
                        <div class="row">
                            <CourseNavigation />
                            <div className="col-md-9 rightArea">
                                <Routes>
                                    <Route path="/" element={<Navigate to="Home" />} />
                                    <Route path="Home" element={<Home />} />
                                    <Route path="Modules" element={<Modules />} />
                                    <Route path="Assignments" element={<Assignments />} />
                                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                                    <Route path="Grades" element={<Grades />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    } else {
        return (
            <div className="courses container-fluid">
                <main role="main" className="col-md-12">
                    <div className="contentArea">
                        <div className="fixed-header">
                            <div className="topArea">
                                <div className="heading">Courses</div>
                            </div>
                            <hr />
                        </div>
                        <div className="innerArea">
                            <div className="sub-heading">Published Courses ({courses.length})</div>
                            <hr />
                            <div className="course-list">
                                <ul className="list-unstyled">
                                    {courses.map((course) => (
                                        <li>
                                            <div style={{ marginBottom: "10px" }}>
                                                <Link to={`/Kanbas/Courses/${course._id}`} className="courseLink text-danger text-decoration-none">
                                                    {course.number} - {course.name}
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Courses;
