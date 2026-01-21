import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import Skills from "./pages/Skills";
import CreateSkill from "./pages/CreateSkill";
import EditSkill from "./pages/EditSkill";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";

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
