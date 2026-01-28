import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Login from "./screens/Auth/Login";
import Admin from "./screens/Admin/Dashboard/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminSkills from "./screens/Admin/Skills/AdminSkills";
import CreateSkill from "./screens/Admin/Skills/CreateSkill";
import EditSkill from "./screens/Admin/Skills/EditSkill";
import AdminProjects from "./screens/Admin/Projects/AdminProjects";
import CreateProject from "./screens/Admin/Projects/CreateProject";
import EditProject from "./screens/Admin/Projects/EditProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>}/>
        <Route path="/admin/skills" element={<ProtectedRoute><AdminSkills /></ProtectedRoute>}/>
        <Route path="/admin/projects" element={<ProtectedRoute><AdminProjects /></ProtectedRoute>}/>
        <Route path="/admin/create/skill" element={<ProtectedRoute><CreateSkill /></ProtectedRoute>}/>
        <Route path="/admin/create/project" element={<ProtectedRoute><CreateProject /></ProtectedRoute>}/>
        <Route path="/admin/skills/:id/edit" element={<ProtectedRoute><EditSkill /></ProtectedRoute>}/>
        <Route path="/admin/projects/:id/edit" element={<ProtectedRoute><EditProject /></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
