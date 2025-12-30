
import React, { useEffect, useState } from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(skill.level), 500);
    return () => clearTimeout(timer);
  }, [skill.level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
        <span className="text-xs text-slate-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
