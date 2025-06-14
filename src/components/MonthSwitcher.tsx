import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthSwitcherProps {
  currentMonth: number;
  currentYear: number;
  onChange: (month: number, year: number) => void;
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function MonthSwitcher({ currentMonth, currentYear, onChange }: MonthSwitcherProps) {
  const prev = () => {
    let m = currentMonth - 1;
    let y = currentYear;
    if (m < 1) { 
      m = 12; 
      y -= 1; 
    }
    onChange(m, y);
  };

  const next = () => {
    let m = currentMonth + 1;
    let y = currentYear;
    if (m > 12) { 
      m = 1; 
      y += 1; 
    }
    onChange(m, y);
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-lg border border-primary/20 p-4 shadow-sm">
      <button 
        onClick={prev}
        className="p-2 rounded-lg hover:bg-primary/5 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-primary" />
      </button>
      <div className="text-center">
        <div className="text-lg font-semibold text-gray-900">
          {monthNames[currentMonth - 1]} {currentYear}
        </div>
        <div className="text-sm text-gray-500">
          Select month for data entry
        </div>
      </div>
      <button 
        onClick={next}
        className="p-2 rounded-lg hover:bg-primary/5 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-primary" />
      </button>
    </div>
  );
}