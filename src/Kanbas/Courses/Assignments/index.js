import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisV,
    faGripVertical,
    faClipboard,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faClipboard as farClipboard } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return (
        <div className="container-fluid">
            <h2>Assignments for course {courseId}</h2>
            <div className="row">
                <div className="col-7">
                    <input
                        type="text"
                        className="form-control margin-top input-text-width"
                        placeholder="Search for Assignments"
                        id="Assignment-Names"
                    />
                </div>
                <div className="col-5 margin-top">
                    <button type="button" className="btn btn-light float-right">
                        <FontAwesomeIcon icon={faEllipsisV} className="black-color" />
                    </button>
                    <button type="button" className="btn btn-danger float-right">
                        +Assignment
                    </button>
                    <button type="button" className="btn btn-light float-right">
                        +Group
                    </button>
                    <div className="dropdown-menu">
                        <button className="dropdown-item" type="button" id="edit-assignment-dates">
                            Edit Assignment Dates
                        </button>
                        <button className="dropdown-item" type="button" id="speed-grader">
                            Speed Grader
                        </button>
                    </div>
                </div>
            </div>

            <div className="row margin-top-20">
                <div className="col-12 assignment-container d-flex align-items-center custom-background custom-right-padding height">
                    <div className="p-container custom-background set-heading">
                        <FontAwesomeIcon icon={faGripVertical} className="black-color" />
                        <p className="assignment-title mb-0 custom-font-size margin-left-5">
                            ASSIGNMENTS
                        </p>
                    </div>
                    <div className="custom-left-padding">
                        <button className="oval-button custom-background">40% of Total</button>
                        <button className="custom-background" style={{ border: "0" }}>
                            +
                        </button>
                        <FontAwesomeIcon icon={faEllipsisV} className="black-color" />
                    </div>
                </div>
            </div>
            {courseAssignments.map((assignment) => (
            <div className="row left-border">
                <div className="d-flex align-items-center padding-top-10">
                    <div className="drag-handle margin-bottom-20" draggable="true">
                        <button type="button" className="left-button-setup">
                            <FontAwesomeIcon icon={faGripVertical} className="black-color" />
                        </button>
                        <button type="button" className="left-button-setup">
                            <FontAwesomeIcon icon={farClipboard} className="pad-color" />
                        </button>
                    </div>
                    <div>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="set-font-style">
                            {assignment._id}
                        </Link>
                        <br />
                        <p className="assignment-text">
                            {assignment.title}
                        </p>
                    </div>
                    <div className="margin-bottom-20 margin-left">
                        <button type="button" className="button-setup" disabled>
                            <FontAwesomeIcon icon={faCheckCircle} className="correct-symbol" />
                        </button>
                        <button type="button" className="button-setup">
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                    </div>
                </div>
                <hr />
            </div>
            ))}
        </div>
    );
}

export default Assignments;
