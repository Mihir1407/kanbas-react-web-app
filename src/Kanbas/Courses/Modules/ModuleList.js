import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { faAdd, faTrash, faCaretRight, faCheckCircle, faEllipsisV, faPlus, faSortDown, faUpload, faFileEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";
import 'bootstrap/dist/css/bootstrap.min.css';

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const courseModules = modules.filter((module) => module.course === courseId);
    const dispatch = useDispatch();
    console.log(courseId);
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
                    <li className="list-group-item list-group-item-secondary dropdown">
                        <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color" />
                        <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color icon-space2" />
                        <FontAwesomeIcon icon={faCaretRight} className="icon-space2" />
                        <div className="form-control">
                            <input value={module.name}
                                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                            />
                            <br />
                            <textarea value={module.description}
                                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                            />
                            <br />
                            <button className="btn btn-outline-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                                <FontAwesomeIcon icon={faAdd} />
                                Add
                            </button>
                            <button className="btn btn-outline-primary" onClick={() => dispatch(updateModule(module))}>
                                <FontAwesomeIcon icon={faUpload} />
                                Update
                            </button>
                        </div>
                    </li>
                    {
                        courseModules.map((module, index) => (
                            <li className="list-group-item list-group-item-secondary dropdown">
                                <div className="row">
                                    <div className="col">
                                        <div className="leftModuleContent">
                                            <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color" />
                                            <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color icon-space2" />
                                            <FontAwesomeIcon icon={faCaretRight} className="icon-space2" />
                                            {module.name}
                                            <br />
                                            {module.description}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="rightModuleContent float-end">
                                            <button
                                                className="btn btn-outline-warning deleteButton"
                                                onClick={() => dispatch(setModule(module))}>
                                                <FontAwesomeIcon icon={faFileEdit} />
                                                &nbsp;
                                                Edit
                                            </button>
                                            <button style={{ marginRight: "10px" }}
                                                className="btn btn-outline-danger deleteButton"
                                                onClick={() => dispatch(deleteModule(module._id))}>
                                                <FontAwesomeIcon icon={faTrash} />
                                                &nbsp;
                                                Delete
                                            </button>
                                            <div className="btn-group">
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-success icon-space4" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <FontAwesomeIcon icon={faSortDown} className="text-success icon-space3" data-bs-toggle="dropdown" aria-expanded="false" />
                                            </div>

                                            <FontAwesomeIcon icon={faPlus} className="icon-space ellipse-color" />
                                            <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color" />
                                        </div>
                                    </div>
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
