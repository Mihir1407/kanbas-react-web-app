import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faFileExport, faCog, faFilter } from '@fortawesome/free-solid-svg-icons';
import db from '../../Database';
import './style.css';

function Grades() {
    const { courseId } = useParams();
    console.log(courseId);
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <div className="grades-container">
            <div className="row">
                <div className="col-12">
                    <div className="float-right">
                        <button className="btn btn-light">
                            <FontAwesomeIcon icon={faFileImport} className="text-dark" /> Import
                        </button>
                        <button className="btn btn-light">
                            <FontAwesomeIcon icon={faFileExport} className="text-dark" /> Export
                        </button>
                        <button className="btn btn-light">
                            <FontAwesomeIcon icon={faCog} className="text-dark" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="Assignment-Names"><b>Assignment Names</b></label>
                </div>
                <div className="col-md-6">
                    <label htmlFor="Student-Names"><b>Student Names</b></label>
                </div>
            </div>

            <div className="row" style={{ marginTop: '5px' }}>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Search Assignments" id="Assignment-Names" />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Search Students" id="Student-Names" />
                </div>
            </div>

            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-3">
                    <button className="btn btn-light">
                        <FontAwesomeIcon icon={faFilter} className="text-dark" /> Apply Filter
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-stripped custom-table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment, index) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            const gradeRowClass = index % 2 === 0 ? 'gray-row' : 'white-row';
                            return (
                                <tr className={gradeRowClass}>
                                    <td className={`pas ${gradeRowClass}`}>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td className={`text-center ${gradeRowClass}`}> {grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grades;
