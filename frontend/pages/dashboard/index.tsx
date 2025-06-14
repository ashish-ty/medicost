import Link from 'next/link';
import Card from '../../components/Card';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card title="Manage Hospital Data">
          <Link href="/dashboard/hospital/1/revenue"><a>Go to Data Entry</a></Link>
        </Card>
        <Card title="Tools Overview">
          <Link href="/dashboard/tools"><a>Launch Tools</a></Link>
        </Card>
      </div>
    </div>
  );
}