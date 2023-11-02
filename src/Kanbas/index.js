import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    const newCourseWithId = { ...course, _id: new Date().getTime() };
    setCourses([...courses, newCourseWithId]);
    setCourse({
      name: "",
      number: "",
      startDate: "",
      endDate: "",
    });
  };

  const deleteCourse = (courseId) => {
    const updatedCourses = courses.filter((c) => c._id !== courseId);
    setCourses(updatedCourses);
  };

  const updateCourse = () => {
    const updatedCourses = courses.map((c) => {
      if (c._id === course._id) {
        return course;
      } else {
        return c;
      }
    });
    setCourses(updatedCourses);
  };
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <KanbasNavigation />
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              } />
              <Route path="Courses/:courseId/*" element={
                <Courses courses={courses} />} />
              <Route path="Courses/*" element={
                <Courses courses={courses} />} />
            </Routes>

          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;