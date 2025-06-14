import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MonthSwitcher from '../../../components/MonthSwitcher';

export default function SectionEntry() {
  const { query } = useRouter();
  const { hid, section } = query as { hid: string; section: string };
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!hid || !section) return;
    // Dummy fetch
    fetch(`/api/hospitals/${hid}/${section}?month=${month}&year=${year}`)
      .then((res) => res.json())
      .then(setData);
  }, [hid, section, month, year]);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">{section.toUpperCase()} Entry for Hospital {hid}</h1>
      <MonthSwitcher currentMonth={month} currentYear={year} onChange={(m, y) => { setMonth(m); setYear(y); }} />
      <pre className="bg-gray-100 p-4">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}