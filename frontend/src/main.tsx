import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import CourseList from "./CourseList";
import { AuthProvider } from './AuthContext';

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <CourseList />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
