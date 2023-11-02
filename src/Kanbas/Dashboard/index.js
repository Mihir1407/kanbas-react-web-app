import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
    faEdit,
    faEllipsisV,
    faTrash,
    faFileEdit,
    faUpload,
    faAdd,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
  }){
    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            let cardsPerRow = 4;

            if (screenWidth <= 1300 && screenWidth > 900) {
                cardsPerRow = 3;
            } else if (screenWidth <= 900 && screenWidth > 750) {
                cardsPerRow = 2;
            } else if (screenWidth <= 750) {
                cardsPerRow = 1;
            }

            document.documentElement.style.setProperty("--cards-per-row", cardsPerRow);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <main role="main" className="col-md-10 col-lg-10">
                <div className="contentArea">
                    <div className="fixed-header">
                        <div className="topArea">
                            <div className="heading">Dashboard</div>
                        </div>
                        <hr />
                    </div>
                    <div className="innerArea">
                        <div className="sub-heading">Published Courses ({courses.length})</div>
                        <hr />

                        <div className="course-card-form">
                            <div className="card">
                                <div className="upper-half back-dblue">
                                    <FontAwesomeIcon icon={faEllipsisV} className="dots" />
                                </div>
                                <div className="lower-half">
                                    <div className="form-control">
                                        <input
                                            placeholder="Course Name"
                                            value={course.name}
                                            onChange={(e) => setCourse({ ...course, name: e.target.value })}
                                        />
                                        <input
                                            placeholder="Course Number"
                                            value={course.number}
                                            onChange={(e) => setCourse({ ...course, number: e.target.value })}
                                        />
                                        <input
                                            type="date"
                                            value={course.startDate}
                                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                                        />
                                        <input
                                            type="date"
                                            value={course.endDate}
                                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                                        />
                                        <br />
                                        <button onClick={addNewCourse} className="btn btn-outline-success">
                                            <FontAwesomeIcon icon={faAdd} />
                                            Add Course
                                        </button>
                                        <button onClick={updateCourse} className="btn btn-outline-primary">
                                            <FontAwesomeIcon icon={faUpload} />
                                            Update Course
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="course-card-container">
                            {courses.map((course, index) => (
                                <div className="course-card" key={course._id}>
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
                                            <button
                                                className="btn btn-outline-warning deleteButton"
                                                onClick={() => setCourse(course)}
                                            >
                                                <FontAwesomeIcon icon={faFileEdit} />
                                                &nbsp;
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-outline-danger deleteButton"
                                                onClick={() => deleteCourse(course._id)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                                &nbsp;
                                                Delete
                                            </button>
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
