import db from "../../Kanbas/Database";
import { useParams, useLocation } from "react-router-dom";
import "./style.css";
import { faBars, faGlasses } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const location = useLocation();

    const pathnameParts = location.pathname.split("/");
    const activeBreadcrumb = decodeURIComponent(pathnameParts.pop());

    return (
        <div className="courses container-fluid">
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div className="contentArea">
                    <div className="topArea">
                        <div className="menuIconArea">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="profileNameArea">
                            <nav aria-label="breadcrumb" style={{ marginTop: "20px" }}>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active">
                                        <div className="passiveIcon">
                                            {course.name}
                                        </div>
                                    </li>
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
                                <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
                                <Route path="Grades" element={<h1>Grades</h1>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Courses;
