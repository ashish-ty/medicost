import Link from 'next/link';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  const features = [
    'Financial Overview',
    'Operational Efficiency',
    'Expense Insights',
    'Trends & Variance',
  ];

  return (
    <div className="space-y-8">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Maximize Your Hospital’s Financial Health with AI!</h1>
        <p className="mb-6">Effortlessly track profits and losses, optimize revenue, and make data-driven decisions.</p>
        <Link href="/login">
          <Button>Get Started</Button>
        </Link>
      </section>
      <section className="grid grid-cols-2 gap-4">
        {features.map((feat) => (
          <Card key={feat} title={feat}>
            <p>Analyze and visualize your {feat.toLowerCase()}.</p>
          </Card>
        ))}
      </section>
    </div>
  );
}