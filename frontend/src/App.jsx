import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BecomeInstructor from "./pages/Becomeinstructor";
import StudentDashboard from "./pages/Studentdashboard";
import InstructorDashboard from "./pages/Instructordashboard";
import MyCourses from "./pages/Mycourses";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login"             element={<Login />} /> 
      <Route path="/signup"            element={<Signup />} />
      <Route path="/become-instructor" element={<BecomeInstructor />} /> 
      <Route path="/student-dashboard" element={<StudentDashboard />} /> 
      <Route path="/instructor-dashboard" element={<InstructorDashboard />} /> 
      <Route path="/mycourse"          element={<MyCourses />} />
    </Routes>
  );
}