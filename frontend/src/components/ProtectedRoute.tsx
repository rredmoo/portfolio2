import type { JSX } from "react";
import { getToken } from "../auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}: {children: JSX.Element}){
    if (!getToken()) return <Navigate to="/login" />;
    return children;
}