
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import CourseList from './CourseList';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <CourseList />
      </BrowserRouter>
    </React.StrictMode>
  );
}