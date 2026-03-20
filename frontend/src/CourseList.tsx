import React, { useEffect, useState } from 'react';
import api from './api/axios';
import { CourseCard } from './CourseCard';

interface Course {
  id: number;
  title: string;
  description?: string;
  instructor_name: string;
  thumbnail?: string | null;
  duration: string;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    api.get('/courses/')
      .then((res: { data: Course[] }) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err: any) => {
        if (err.response && err.response.status === 401) {
          setError('Sessão expirada. Faça login novamente.');
        } else {
          setError('Erro ao carregar cursos.');
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 p-4">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, idx) => (
            <CourseCard key={idx} loading id={0} title="" description="" instructor_name="" duration="" />
          ))}
        </div>
      </div>
    );
  }
  if (error) return <div className="text-center text-red-600 font-semibold mt-8">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 flex flex-col">
      <header className="w-full py-8 px-4 bg-white/80 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight text-center sm:text-left">Catálogo de Cursos</h1>
          <span className="text-slate-500 text-base text-center sm:text-right">Aprenda no seu ritmo, de onde estiver.</span>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-2 py-8">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description || 'Sem descrição.'}
              instructor_name={course.instructor_name}
              thumbnail={course.thumbnail}
              duration={course.duration}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CourseList;
