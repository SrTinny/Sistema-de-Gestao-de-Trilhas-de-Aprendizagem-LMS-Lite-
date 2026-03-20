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
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, idx) => (
            <CourseCard key={idx} loading id={0} title="" description="" instructor_name="" duration="" />
          ))}
        </div>
      </div>
    );
  }
  if (error) return <div className="text-center text-red-600 font-semibold mt-8">{error}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </div>
  );
};

export default CourseList;
