import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { DollarSign, TrendingDown, Database, Calendar, FileText, BarChart3 } from 'lucide-react';

export default function HospitalData() {
  const dataTypes = [
    {
      key: 'revenue',
      title: 'Revenue / Income Data',
      description: 'Track patient billing, speciality-wise revenue, and income streams',
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      fields: [
        'Type of Patients (OPD/IPD)',
        'Speciality (Cardiology, Oncology, etc.)',
        'Billing Category (Cash/Credit)',
        'Number of Patients',
        'Bed Days (ICU & Non-ICU)',
        'Gross Amount & Discounts'
      ],
      color: 'bg-green-50 border-green-200'
    },
    {
      key: 'expenses',
      title: 'Expenses Data',
      description: 'Monitor all operational expenses and cost categories',
      icon: <TrendingDown className="w-8 h-8 text-red-600" />,
      fields: [
        'Pharmacy, Medical & Surgical',
        'Non-Medical Materials',
        'Doctor Share & Outsource Services',
        'Salary & Wages',
        'Power & Fuel',
        'Admin & Financial Expenses',
        'Repair & Maintenance',
        'Sales & Marketing',
        'Depreciation & Amortization'
      ],
      color: 'bg-red-50 border-red-200'
    },
    {
      key: 'metadata',
      title: 'Hospital Metadata',
      description: 'Maintain hospital capacity and staffing information',
      icon: <Database className="w-8 h-8 text-blue-600" />,
      fields: [
        'Available Beds (ICU/Non-ICU)',
        'Number of Nurses',
        'Number of Resident Doctors',
        'Technician & Support Staff Count'
      ],
      color: 'bg-blue-50 border-blue-200'
    }
  ];

  const recentEntries = [
    { type: 'Revenue', month: 'December 2024', status: 'Complete', date: '2024-12-15' },
    { type: 'Expenses', month: 'December 2024', status: 'Pending', date: '2024-12-10' },
    { type: 'Metadata', month: 'December 2024', status: 'Complete', date: '2024-12-01' },
    { type: 'Revenue', month: 'November 2024', status: 'Complete', date: '2024-11-30' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hospital Data Management</h1>
          <p className="text-gray-600 mt-1">Manage your hospital's financial and operational data</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Current Month: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      {/* Data Type Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {dataTypes.map((dataType) => (
          <Card key={dataType.key} hover className={`${dataType.color} border-2`}>
            <div className="text-center mb-4">
              <div className="flex justify-center mb-3">
                {dataType.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {dataType.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {dataType.description}
              </p>
            </div>
            
            <div className="space-y-2 mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Key Fields:</h4>
              <div className="space-y-1">
                {dataType.fields.slice(0, 4).map((field, index) => (
                  <div key={index} className="text-xs text-gray-600 flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                    {field}
                  </div>
                ))}
                {dataType.fields.length > 4 && (
                  <div className="text-xs text-gray-500 italic">
                    +{dataType.fields.length - 4} more fields...
                  </div>
                )}
              </div>
            </div>

            <Link to={`/dashboard/hospital-data/${dataType.key}`}>
              <div className="btn-primary text-center block">
                Manage {dataType.title.split(' ')[0]}
              </div>
            </Link>
          </Card>
        ))}
      </div>

      {/* Recent Entries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Recent Data Entries">
          <div className="space-y-3">
            {recentEntries.map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium">{entry.type} - {entry.month}</div>
                    <div className="text-xs text-gray-500">{entry.date}</div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  entry.status === 'Complete' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {entry.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-4">
            <Link to="/dashboard/tools">
              <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer">
                <BarChart3 className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-medium">Generate Analytics Report</div>
                  <div className="text-sm text-gray-600">Create comprehensive financial analysis</div>
                </div>
              </div>
            </Link>
            <div className="flex items-center space-x-3 p-4 bg-highlight/10 rounded-lg hover:bg-highlight/20 transition-colors cursor-pointer">
              <Calendar className="w-6 h-6 text-highlight" />
              <div>
                <div className="font-medium">Bulk Data Import</div>
                <div className="text-sm text-gray-600">Import data from Excel/CSV files</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors cursor-pointer">
              <FileText className="w-6 h-6 text-primary" />
              <div>
                <div className="font-medium">Export Data</div>
                <div className="text-sm text-gray-600">Download data in various formats</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}