import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  // const addNewCourse = () => {
  //   const newCourseWithId = { ...course, _id: new Date().getTime() };
  //   setCourses([...courses, newCourseWithId]);
  //   setCourse({
  //     name: "",
  //     number: "",
  //     startDate: "",
  //     endDate: "",
  //   });
  // };

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({
      name: "",
      number: "",
      startDate: "",
      endDate: "",
    });
  };

  // const deleteCourse = (courseId) => {
  //   const updatedCourses = courses.filter((c) => c._id !== courseId);
  //   setCourses(updatedCourses);
  // };

  const deleteCourse = async (course) => {
    console.log(course);
    const response = await axios.delete(
      `${URL}/${course}`
    );
    setCourses(courses.filter(
      (c) => c._id != course));
  };


  // const updateCourse = () => {
  //   const updatedCourses = courses.map((c) => {
  //     if (c._id === course._id) {
  //       return course;
  //     } else {
  //       return c;
  //     }
  //   });
  //   setCourses(updatedCourses);
  // };

  const updateCourse = async () => {
    console.log(course);
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({
      name: "",
      number: "",
      startDate: "",
      endDate: "",
    });
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