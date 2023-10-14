import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./style.css";
import { faCaretDown, faCaretRight, faCheckCircle, faEllipsisV, faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'bootstrap/dist/css/bootstrap.min.css';

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div className="midArea">
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-secondary me-1 color-change">Collapse All</button>
                <button className="btn btn-secondary me-1 color-change">View Progress</button>
                <div className="dropdown me-2">
                    <button className="btn btn-secondary dropdown-toggle color-change" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" /> Publish All
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#">Publish</a></li>
                    </ul>
                </div>
                <button className="btn btn-danger me-1"><FontAwesomeIcon icon={faPlus} className="icon-space2" /> Module</button>
                <button className="btn btn-secondary me-1 color-change"><FontAwesomeIcon icon={faEllipsisV} className="float-end" /></button>
            </div>
            <hr />
            <div className="mb-3">
                <ul className="list-group module-groups">
                    {
                        modules
                            .filter((module) => module.course === courseId)
                            .map((module, index) => (
                                <li className="list-group-item list-group-item-secondary dropdown">
                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color" />
                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color icon-space2" />
                                    <FontAwesomeIcon icon={faCaretRight} className="icon-space2" />
                                    {module.name} - {module.description}
                                    <div className="float-end">
                                        <div className="btn-group">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-success icon-space4" data-bs-toggle="dropdown" aria-expanded="false" />
                                            <FontAwesomeIcon icon={faSortDown} className="text-success icon-space3" data-bs-toggle="dropdown" aria-expanded="false" />
                                        </div>

                                        <FontAwesomeIcon icon={faPlus} className="icon-space ellipse-color" />
                                        <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color" />
                                    </div>
                                </li>
                            ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default ModuleList;
