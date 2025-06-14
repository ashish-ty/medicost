import Link from 'next/link';
import Card from '../../../components/Card';

export default function ToolsOverview() {
  const tools = [
    { key: 'financial-overview', label: 'Financial Overview' },
    { key: 'operational-efficiency', label: 'Operational Efficiency' },
    { key: 'expense-insights', label: 'Expense Insights' },
    { key: 'trends-variance', label: 'Trends & Variance' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Tools</h1>
      <div className="grid grid-cols-2 gap-4">
        {tools.map((tool) => (
          <Card key={tool.key} title={tool.label}>
            <Link href={`/dashboard/tools/${tool.key}`}><a>Launch</a></Link>
          </Card>
        ))}
      </div>
    </div>
  );
}