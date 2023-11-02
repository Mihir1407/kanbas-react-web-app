import { React, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { faCheckCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addAssignment, updateAssignment } from '../assignmentsReducer'
import { useDispatch, useSelector } from 'react-redux';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector(state => state.assignmentsReducer.assignments);
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    const newAssignment = {
      title: assignmentName,
      description: assignmentDesc,
      course: courseId,
      dueDate: assignmentDue,
      startDate: assignStart,
      endDate: assignEnd,
    };
    if (assignmentId === "new") {
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment({ ...newAssignment, _id: assignmentId }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const [assignmentName, setAssignmentName] = useState(
    assignmentId === "new" ? "" : assignment.title
  );
  const [assignmentDesc, setAssignmentDesc] = useState(
    assignmentId === "new" ? "" : assignment.description
  );
  const [assignmentDue, setAssignmentDue] = useState(
    assignmentId === "new" ? "" : assignment.dueDate
  );
  const [assignStart, setAssignStart] = useState(
    assignmentId === "new" ? "" : assignment.startDate
  );
  const [assignEnd, setAssignEnd] = useState(
    assignmentId === "new" ? "" : assignment.endDate
  );
  return (
    <div className="assignEdit">
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-light float-right">
            <FontAwesomeIcon icon={faEllipsisV} className="black-color" />
          </button>
          <button type="button" className="published-button-setup float-right button-margin">
            <FontAwesomeIcon icon={faCheckCircle} className="button-color" />
            <span className="button-color"><b>Published</b></span>
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <label htmlFor="ASSIGNMENT-NAME" className="text-align-left">
            Assignment Name
          </label>
          <input id="ASSIGNMENT-NAME" type="text" onChange={(e) => setAssignmentName(e.target.value)} value={assignmentName} className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <textarea cols="155" rows="5" value={assignmentDesc} onChange={(e) => setAssignmentDesc(e.target.value)} className="form-control content-margin">
          </textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-3 set-label content-margin">
          <label for="points">Points</label>
        </div>
        <div class="col-7 content-margin">
          <input type="text" value="100" id="points" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-3 set-label content-margin">
          <label for="Assignment-Group">Assignment Group</label>
        </div>
        <div class="col-7 content-margin">
          <select id="Assignment-Group" class="form-control">
            <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-3 set-label content-margin">
          <label for="Display-Grade">Display Grade as</label>
        </div>
        <div class="col-7 content-margin">
          <select id="Display-Grade" class="form-control">
            <option value="PERCENTAGE" selected>Percentage</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-3 set-label content-margin">
        </div>
        <div class="col-7 content-margin">
          <input type="checkbox" value="Text Entry" name="check-entry-option"
            id="chkbox-entry" />
          <label>Do not count this assignment towards final grade</label>
        </div>
      </div>
      <div className="row">
        <div className="set-table content-margin">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="Submission-Type" className="content-margin float-right set-table-label">Submission Type</label>
            </div>
            <div className="col-md-9">
              <div style={{ border: '1px solid #ccc', paddingLeft: '20px' }}>
                <select id="Submission-Type" style={{ width: '92.55%', marginTop: '20px' }} className="form-control set-text-input">
                  <option value="ONLINE" selected>Online</option>
                </select>
                <br />
                <label htmlFor="Online Entry Option"><b>Online Entry Options</b></label><br />
                <input type="checkbox" value="Text Entry" className="bigger-checkbox margin-left-5" name="check-entry-option" id="chkbox-entry" />
                <label className="padding-left-5">Text Entry</label><br />
                <input type="checkbox" value="Website-URL" className="bigger-checkbox margin-left-5" name="check-website-url" id="chkbox-website" />
                <label className="padding-left-5">Website URL</label><br />
                <input type="checkbox" value="Media-Recording" className="bigger-checkbox margin-left-5" name="check-media" id="chkbox-media" />
                <label className="padding-left-5">Media Recording</label><br />
                <input type="checkbox" value="Student-Annotation" className="bigger-checkbox margin-left-5" name="check-student-annotation" id="chkbox-student-annotation" />
                <label className="padding-left-5">Student Annotation</label><br />
                <input type="checkbox" value="File-Uploads" className="bigger-checkbox margin-left-5" name="check-file-uploads" id="chkbox-file-uploads" />
                <label className="padding-left-5">File Uploads</label><br /><br />

                <label htmlFor="submission-attempt"><b>Submission Attempts</b></label><br />
                <select id="submission-attempt" className="form-control set-select">
                  <option value="UNLIMITED" selected>Unlimited</option>
                  <option value="ONCE">Once</option>
                  <option value="TWICE">Twice</option>
                  <option value="FIVE">Five</option>
                </select><br />

                <label htmlFor="plagarism-id"><b>Plagiarism Review</b></label><br />
                <select id="plagarism-id" className="form-control set-select">
                  <option value="NONE" selected>None</option>
                  <option value="YES">Yes</option>
                </select><br />

                <label htmlFor="Group-Assignment"><b>Group Assignment</b></label><br />
                <input type="checkbox" id="group-id" className="bigger-checkbox margin-left-5" />
                <label id="group-id">This is a group assignment</label><br /><br />

                <label htmlFor="Peer-Reviews"><b>Peer Reviews</b></label><br />
                <input type="checkbox" id="peer-review-id" className="bigger-checkbox margin-left-5" />
                <label id="peer-review-id">Require Peer Reviews</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="assign-table">
        <div className="set-table content-margin">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="Submission-Type" className="content-margin float-right set-table-label">Assign</label>
            </div>
            <div className="col-md-9">
              <div style={{ border: '1px solid #ccc', paddingLeft: '20px' }}>
                <label for="assign-to"><b>Assign to</b></label><br />
                <input class="form-control set-table-width" type="text" id="assign-to"
                  value="Everyone" /><br />

                <label id="due-id" class="control-label"><b>Due</b></label><br />
                <input id="due-id" type="date" onChange={(e) => setAssignmentDue(e.target.value)} value={assignmentDue}
                  class="form-control set-table-width" /><br />

                <div className="set-table-width">
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="available-id"><b>Available From</b></label>
                      <input id="available-id" onChange={(e) => setAssignStart(e.target.value)} type="date" defaultValue={assignStart} className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="until-id"><b>Until</b></label>
                      <input id="until-id" onChange={(e) => setAssignEnd(e.target.value)} type="date" defaultValue={assignEnd} className="form-control" />
                    </div>
                  </div>
                </div>
                <br />
              </div>
              <button width="100%" type="button"
                class="form-control add-button">+Add</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-5">
          <input type="checkbox" id="group-id" className="bigger-checkbox left-margin" />
          <label htmlFor="group-id">Notify users that this content has changed</label>
        </div>
        <div className="col-7">
          <button onClick={handleCancel} className="btn btn-light float-right">Cancel</button>
          <button onClick={handleSave} className="btn btn-danger float-right">Save</button>
        </div>
      </div>
      <hr />
    </div>
  );
}


export default AssignmentEditor;