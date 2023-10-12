import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./style.css"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            {/* <ul className="list-group">
                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="list-group-item">
                                <h3>{module.name}</h3>
                                <p>{module.description}</p>
                            </li>
                        ))
                }
            </ul> */}
            <div>
                <div class="d-flex justify-content-end mb-3">
                    <button class="btn btn-secondary me-1 color-change">Collapse All</button>
                    <button class="btn btn-secondary me-1 color-change">View Progress</button>
                    <div class="dropdown me-2 ">
                        <button class="btn btn-secondary dropdown-toggle color-change" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-success"/> Publish All
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Publish</a></li>
                        </ul>
                    </div>
                    <button class="btn btn-danger me-1"><i class="fas fa-plus icon-space2"></i> Module</button>
                    <button class="btn btn-secondary me-1 color-change"><i class="fas fa-ellipsis-v float-end"></i></button>
                </div>
                <hr />
                <div class="mb-3">
                    <ul class="list-group module-groups">
                        <li class="list-group-item list-group-item-secondary">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space2"></i><i class="fa fa-caret-down icon-space2"></i>Week 0 - Intro
                            <div class="float-end">
                                <div class="btn-group">
                                    <i class="fas fa-check-circle text-success icon-space dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu">
                                    </ul>
                                </div>

                                <i class="fas fa-plus icon-space ellipse-color"></i>
                                <i class="fas fa-ellipsis-v ellipse-color"></i>
                            </div>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space-head"></i>LEARNING OBJECTIVES
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Introduction to the course
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Learn what is web development
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Creating a development environment
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Creating a web application
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Getting started with the 1st assignment
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space-head"></i>READING
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Full Stack Developer - Chapter 1 - Introduction
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space-head"></i>SLIDES
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                    </ul>
                    <ul class="list-group module-groups">
                        <li class="list-group-item list-group-item-secondary">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space2"></i><i class="fa fa-caret-down icon-space2"></i>Week 1 - HTML
                            <div class="float-end">
                                <div class="btn-group">
                                    <i class="fas fa-check-circle text-success icon-space dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu">
                                    </ul>
                                </div>

                                <i class="fas fa-plus icon-space ellipse-color"></i>
                                <i class="fas fa-ellipsis-v ellipse-color"></i>
                            </div>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space-head"></i>LEARNING OBJECTIVES
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Learn How to create user interfaces with HTML
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Keep working on assignment 1
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Deploy the assignments to Netlify
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space-head"></i>READING
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Full Stack Developer - Chapter 1 - Introduction
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space3"></i>Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                        <li class="list-group-item left-border-line">
                            <i class="fas fa-ellipsis-v ellipse-color"></i><i class="fas fa-ellipsis-v ellipse-color icon-space-head"></i>SLIDES
                            <i class="fas fa-ellipsis-v float-end ellipse-color"></i>
                            <i class="fas fa-check-circle text-success float-end icon-space"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ModuleList;