import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Login from "./screens/Auth/Login";
import Admin from "./screens/Admin/Dashboard/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Skills from "./screens/Admin/Skills/AdminSkills";
import CreateSkill from "./screens/Admin/Skills/CreateSkill";
import EditSkill from "./screens/Admin/Skills/EditSkill";
import Projects from "./screens/Admin/Projects/AdminProjects";
import CreateProject from "./screens/Admin/Projects/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>}/>
        <Route path="/admin/skills" element={<ProtectedRoute><Skills /></ProtectedRoute>}/>
        <Route path="/admin/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>}/>
        <Route path="/admin/create/skill" element={<ProtectedRoute><CreateSkill /></ProtectedRoute>}/>
        <Route path="/admin/create/project" element={<ProtectedRoute><CreateProject /></ProtectedRoute>}/>
        <Route path="/admin/skills/:id/edit" element={<ProtectedRoute><EditSkill /></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
