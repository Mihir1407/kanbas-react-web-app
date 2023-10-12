import { Link } from "react-router-dom";
import db from "../Database";
import "./style.css"
import {
    faEdit,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <main role="main" class="col-md-10 col-lg-10">
                <div class="contentArea">
                    <div class="fixed-header">
                        <div class="topArea">
                            <div class="heading">
                                Dashboard
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div class="innerArea">
                        <div class="sub-heading">Published Courses(24)</div>
                        <hr />
                        <div class="row">
                            {courses.map((course, index) => (
                                <div className="course-card col-md-3 col-lg-3" key={index}>
                                    <div className="card">
                                        <div className="upper-half back-dblue">
                                            <FontAwesomeIcon icon={faEllipsisV} className="dots" />
                                        </div>
                                        <div className="lower-half">
                                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                                                <div className="font-dblue">{course.number} {course.name}</div>
                                                <div className="course-name">{course.number}.{course._id}</div>
                                                <div className="course-term">
                                                    {course.startDate} - {course.endDate}
                                                </div>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Dashboard;