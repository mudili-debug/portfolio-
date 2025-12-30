
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-12 h-1.5 bg-blue-600 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;
