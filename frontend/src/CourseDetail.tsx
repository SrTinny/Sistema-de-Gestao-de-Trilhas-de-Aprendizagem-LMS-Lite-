
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import api from './api/axios';
import ProgressBar from './ProgressBar';

interface Course {
  id: number;
  title: string;
  description?: string;
  instructor_name: string;
  duration: string;
  thumbnail?: string | null;
}



const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);


  useEffect(() => {
    setLoading(true);
    setError(null);
    Promise.all([
      api.get(`/courses/${id}/`),
      api.get(`/courses/${id}/progress/`)
    ])
      .then(([courseResp, progressResp]) => {
        setCourse(courseResp.data);
        setProgress(progressResp.data.progress ?? 0);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError('Curso não encontrado.');
        } else if (err.response && err.response.status === 500) {
          setError('Erro interno do servidor. Tente novamente mais tarde.');
        } else {
          setError('Erro ao carregar detalhes do curso.');
        }
        setCourse(null);
        setLoading(false);
      });
  }, [id]);


  if (loading) return <div className="text-center mt-8">Carregando detalhes...</div>;
  if (error) {
    let icon = null;
    if (error === 'Curso não encontrado.') {
      icon = <span className="text-5xl block mb-2">🔎</span>;
    } else if (error === 'Erro interno do servidor. Tente novamente mais tarde.') {
      icon = <span className="text-5xl block mb-2">💥</span>;
    } else {
      icon = <span className="text-5xl block mb-2">⚠️</span>;
    }
    return (
      <div className="text-center text-red-600 font-semibold mt-8">
        {icon}
        {error}
      </div>
    );
  }
  if (!course) return null;


  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <ProgressBar progress={progress} />
      <div className="text-sm text-slate-600 mb-2">Progresso: {progress}%</div>
      <p className="mb-2">{course.description}</p>
      <div className="mb-2 text-sm text-slate-500">Instrutor: {course.instructor_name}</div>
      <div className="mb-4 text-sm text-slate-500">Duração: {course.duration}</div>
      <Link to="/dashboard" className="text-blue-600 hover:underline">Voltar para cursos</Link>
    </div>
  );
};

export default CourseDetail;
