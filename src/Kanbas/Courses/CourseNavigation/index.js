import { Link, useParams, useLocation } from "react-router-dom";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video",
        "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <nav className="col-md-3 leftNavArea">
            <ul>
                {links.map((link, index) => (
                    <li>
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                            className={`${pathname.includes(encodeURIComponent(link)) ? "selected" : ""}`}>
                            {link}
                            {(index >= 9 && index <= 16) && (
                                <FontAwesomeIcon icon={faEyeSlash} className="activeIcon float-end" style={{ marginRight: "20px" }} />
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}


export default CourseNavigation;