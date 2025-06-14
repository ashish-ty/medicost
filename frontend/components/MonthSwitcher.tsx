import React from 'react';

interface MonthSwitcherProps {
  currentMonth: number;
  currentYear: number;
  onChange: (month: number, year: number) => void;
}

export default function MonthSwitcher({ currentMonth, currentYear, onChange }: MonthSwitcherProps) {
  const prev = () => {
    let m = currentMonth - 1;
    let y = currentYear;
    if (m < 1) { m = 12; y -= 1; }
    onChange(m, y);
  };
  const next = () => {
    let m = currentMonth + 1;
    let y = currentYear;
    if (m > 12) { m = 1; y += 1; }
    onChange(m, y);
  };
  return (
    <div className="flex items-center space-x-2">
      <button onClick={prev}>&lt;</button>
      <span>{currentMonth}/{currentYear}</span>
      <button onClick={next}>&gt;</button>
    </div>
  );
}