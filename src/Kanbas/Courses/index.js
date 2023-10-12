import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import "./style.css";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);

  return (
    <div className="courses">
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div className="contentArea">
          <div className="topArea">
            <div className="menuIconArea">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="profileNameArea">
              <nav aria-label="breadcrumb" style={{ marginTop: "20px" }}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">
                    <div className="passiveIcon">
                      {course.name}
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <hr />
        </div>
      </main>
    </div>
  );
}

export default Courses;
