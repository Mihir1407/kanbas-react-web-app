import { Link, useParams, useLocation } from "react-router-dom";
import "../style.css"

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video",
        "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <nav class="col-md-3 leftNavArea">
            <ul>
                {links.map((link, index) => (
                    <li>
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                            className={`${pathname.includes(link) ? "selected" : ""}`}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}


export default CourseNavigation;