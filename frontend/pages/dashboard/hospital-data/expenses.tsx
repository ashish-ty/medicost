import React, { useState } from 'react';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import MonthSwitcher from '../../../components/MonthSwitcher';
import { Save, TrendingDown } from 'lucide-react';

interface ExpenseData {
  pharmacyMedicalSurgical: number;
  materialNonMedical: number;
  doctorShareOutsource: number;
  salaryWages: number;
  powerFuel: number;
  adminFinancial: number;
  repairMaintenance: number;
  salesMarketing: number;
  depreciationAmortization: number;
}

export default function ExpensesData() {
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [expenses, setExpenses] = useState<ExpenseData>({
    pharmacyMedicalSurgical: 0,
    materialNonMedical: 0,
    doctorShareOutsource: 0,
    salaryWages: 0,
    powerFuel: 0,
    adminFinancial: 0,
    repairMaintenance: 0,
    salesMarketing: 0,
    depreciationAmortization: 0
  });

  const expenseCategories = [
    { key: 'pharmacyMedicalSurgical', label: 'Pharmacy, Medical & Surgical', description: 'Medicines, medical supplies, surgical equipment' },
    { key: 'materialNonMedical', label: 'Material – Non Medical', description: 'Office supplies, cleaning materials, utilities' },
    { key: 'doctorShareOutsource', label: 'Doctor Share & Outsource Services', description: 'Consultant fees, outsourced medical services' },
    { key: 'salaryWages', label: 'Salary & Wages', description: 'Staff salaries, overtime, benefits' },
    { key: 'powerFuel', label: 'Power & Fuel', description: 'Electricity, generator fuel, heating costs' },
    { key: 'adminFinancial', label: 'Admin. & Financial Expenses', description: 'Administrative costs, banking charges, insurance' },
    { key: 'repairMaintenance', label: 'Repair and Maintenance', description: 'Equipment maintenance, building repairs' },
    { key: 'salesMarketing', label: 'Sales & Marketing', description: 'Advertising, promotional activities, patient acquisition' },
    { key: 'depreciationAmortization', label: 'Depreciation & Amortization', description: 'Asset depreciation, loan amortization' }
  ];

  const updateExpense = (key: keyof ExpenseData, value: number) => {
    setExpenses(prev => ({ ...prev, [key]: value }));
  };

  const saveData = () => {
    // Dummy save function
    alert('Expense data saved successfully!');
  };

  const totalExpenses = Object.values(expenses).reduce((sum, value) => sum + value, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Expenses Data Entry</h1>
          <p className="text-gray-600 mt-1">Track and manage all operational expenses</p>
        </div>
        <Button onClick={saveData} className="flex items-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save Data</span>
        </Button>
      </div>

      <MonthSwitcher 
        currentMonth={month} 
        currentYear={year} 
        onChange={(m, y) => { setMonth(m); setYear(y); }} 
      />

      {/* Total Expenses Summary */}
      <Card className="bg-red-50 border-red-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Monthly Expenses</h3>
            <p className="text-3xl font-bold text-red-600">₹{totalExpenses.toLocaleString()}</p>
          </div>
          <TrendingDown className="w-12 h-12 text-red-600" />
        </div>
      </Card>

      {/* Expense Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {expenseCategories.map((category) => (
          <Card key={category.key} title={category.label}>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">{category.description}</p>
              <div>
                <label className="form-label">Amount (₹)</label>
                <input
                  type="number"
                  value={expenses[category.key as keyof ExpenseData]}
                  onChange={(e) => updateExpense(category.key as keyof ExpenseData, parseFloat(e.target.value) || 0)}
                  className="form-input"
                  min="0"
                  step="0.01"
                  placeholder="Enter amount"
                />
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">
                  {((expenses[category.key as keyof ExpenseData] / totalExpenses) * 100 || 0).toFixed(1)}% of total
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Expense Breakdown Chart Placeholder */}
      <Card title="Expense Distribution">
        <div className="space-y-4">
          {expenseCategories.map((category) => {
            const amount = expenses[category.key as keyof ExpenseData];
            const percentage = totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0;
            
            return (
              <div key={category.key} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{category.label}</span>
                    <span className="text-sm text-gray-600">₹{amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
                <span className="ml-4 text-sm text-gray-500 w-12 text-right">
                  {percentage.toFixed(1)}%
                </span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}