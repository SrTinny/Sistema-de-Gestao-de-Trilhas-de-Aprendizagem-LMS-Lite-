import React from 'react';
import { Link } from 'react-router-dom';

export interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  instructor_name: string;
  thumbnail?: string | null;
  duration: string;
  loading?: boolean;
}

export const CourseCardSkeleton: React.FC = () => (
  <div className="animate-pulse bg-white rounded-lg shadow p-4 flex flex-col gap-3 w-full max-w-xs">
    <div className="bg-gray-200 h-36 w-full rounded mb-2 flex items-center justify-center">
      <div className="w-12 h-12 bg-gray-300 rounded" />
    </div>
    <div className="h-5 bg-gray-200 rounded w-3/4 mb-1" />
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
    <div className="h-4 bg-gray-100 rounded w-2/3 mb-1" />
    <div className="h-4 bg-gray-100 rounded w-1/3 mb-3" />
    <div className="h-9 bg-gray-200 rounded w-full" />
  </div>
);

const BookIcon = () => (
  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4a2 2 0 00-2-2H6a2 2 0 00-2 2v16a2 2 0 002 2h4a2 2 0 002-2v-2m0-12h4a2 2 0 012 2v16a2 2 0 01-2 2h-4" />
  </svg>
);

export const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  instructor_name,
  thumbnail,
  duration,
  loading = false,
}) => {
  if (loading) return <CourseCardSkeleton />;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 w-full max-w-xs border border-slate-200 transition hover:shadow-lg">
      <div className="h-36 w-full rounded-lg mb-2 flex items-center justify-center bg-slate-100 overflow-hidden">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="object-cover w-full h-full" loading="lazy" />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-slate-200">
            <BookIcon />
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-slate-800 truncate leading-tight">{title}</h3>
      <p className="text-base text-slate-600 line-clamp-2 min-h-[2.5rem]">{description || 'Sem descrição.'}</p>
      <div className="flex items-center justify-between text-sm text-slate-500 mt-2">
        <span className="font-medium">Instrutor: <span className="font-normal">{instructor_name || 'Desconhecido'}</span></span>
        <span className="font-medium">Duração: <span className="font-normal">{duration || '-'}</span></span>
      </div>
      <Link
        to={`/courses/${id}`}
        className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 rounded-lg transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400"
        aria-label={`Acessar curso ${title}`}
      >
        Acessar Curso
      </Link>
    </div>
  );
};
