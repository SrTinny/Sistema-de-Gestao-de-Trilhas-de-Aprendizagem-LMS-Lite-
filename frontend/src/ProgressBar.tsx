import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 a 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mt-4 mb-2">
      <div
        className="bg-indigo-600 h-4 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      />
    </div>
  );
};

export default ProgressBar;
