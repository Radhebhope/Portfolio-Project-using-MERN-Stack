import Topbar from "./component/topbar/Topbar";
import React from "@testing-library/jest-dom";
import Sidebar from "./component/sidebar/SideBar";
import "./App.css";
// import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import StudentList from "./pages/studentList/StudentList";
// import NewStudent from "./pages/newStudent/NewStudent";
import Login from "./component/login/Login";
// import Student from "./pages/student/Student";

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/Login" element={<Login />} />

          {/* <Route path="/students" element={<StudentList />} />
          <Route path="/students/:studentId" element={<Student />} />

          <Route exact path="/newstudent" element={<NewStudent />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
