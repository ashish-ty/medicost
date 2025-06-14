import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import MonthSwitcher from '../components/MonthSwitcher';
import { Save, Plus, Trash2, DollarSign } from 'lucide-react';

interface RevenueEntry {
  id: string;
  patientType: 'OPD' | 'IPD';
  speciality: string;
  billingCategory: 'Cash' | 'Credit';
  numberOfPatients: number;
  bedDaysICU: number;
  bedDaysNonICU: number;
  grossAmount: number;
  discount: number;
}

export default function RevenueData() {
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [entries, setEntries] = useState<RevenueEntry[]>([
    {
      id: '1',
      patientType: 'OPD',
      speciality: 'Cardiology',
      billingCategory: 'Cash',
      numberOfPatients: 150,
      bedDaysICU: 0,
      bedDaysNonICU: 0,
      grossAmount: 450000,
      discount: 22500
    }
  ]);

  const specialities = [
    'Cardiology', 'Oncology', 'Neurology', 'Gynaecology', 'Orthopedics',
    'Pediatrics', 'General Medicine', 'Surgery', 'Emergency', 'Radiology'
  ];

  const addNewEntry = () => {
    const newEntry: RevenueEntry = {
      id: Date.now().toString(),
      patientType: 'OPD',
      speciality: 'Cardiology',
      billingCategory: 'Cash',
      numberOfPatients: 0,
      bedDaysICU: 0,
      bedDaysNonICU: 0,
      grossAmount: 0,
      discount: 0
    };
    setEntries([...entries, newEntry]);
  };

  const updateEntry = (id: string, field: keyof RevenueEntry, value: any) => {
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const saveData = () => {
    // Dummy save function
    alert('Revenue data saved successfully!');
  };

  const totalGrossAmount = entries.reduce((sum, entry) => sum + entry.grossAmount, 0);
  const totalDiscount = entries.reduce((sum, entry) => sum + entry.discount, 0);
  const netRevenue = totalGrossAmount - totalDiscount;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Revenue Data Entry</h1>
          <p className="text-gray-600 mt-1">Manage income and revenue data for your hospital</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={addNewEntry} className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Entry</span>
          </Button>
          <Button onClick={saveData} className="flex items-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Data</span>
          </Button>
        </div>
      </div>

      <MonthSwitcher 
        currentMonth={month} 
        currentYear={year} 
        onChange={(m, y) => { setMonth(m); setYear(y); }} 
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-50 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Gross Revenue</p>
              <p className="text-2xl font-bold text-green-600">₹{totalGrossAmount.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Discounts</p>
              <p className="text-2xl font-bold text-red-600">₹{totalDiscount.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-red-600" />
          </div>
        </Card>
        <Card className="bg-primary/10 border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Net Revenue</p>
              <p className="text-2xl font-bold text-primary">₹{netRevenue.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-primary" />
          </div>
        </Card>
      </div>

      {/* Data Entry Forms */}
      <div className="space-y-4">
        {entries.map((entry, index) => (
          <Card key={entry.id} title={`Revenue Entry ${index + 1}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="form-label">Patient Type</label>
                <select
                  value={entry.patientType}
                  onChange={(e) => updateEntry(entry.id, 'patientType', e.target.value)}
                  className="form-input"
                >
                  <option value="OPD">OPD</option>
                  <option value="IPD">IPD</option>
                </select>
              </div>

              <div>
                <label className="form-label">Speciality</label>
                <select
                  value={entry.speciality}
                  onChange={(e) => updateEntry(entry.id, 'speciality', e.target.value)}
                  className="form-input"
                >
                  {specialities.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Billing Category</label>
                <select
                  value={entry.billingCategory}
                  onChange={(e) => updateEntry(entry.id, 'billingCategory', e.target.value)}
                  className="form-input"
                >
                  <option value="Cash">Cash</option>
                  <option value="Credit">Credit</option>
                </select>
              </div>

              <div>
                <label className="form-label">Number of Patients</label>
                <input
                  type="number"
                  value={entry.numberOfPatients}
                  onChange={(e) => updateEntry(entry.id, 'numberOfPatients', parseInt(e.target.value) || 0)}
                  className="form-input"
                  min="0"
                />
              </div>

              <div>
                <label className="form-label">Bed Days (ICU)</label>
                <input
                  type="number"
                  value={entry.bedDaysICU}
                  onChange={(e) => updateEntry(entry.id, 'bedDaysICU', parseInt(e.target.value) || 0)}
                  className="form-input"
                  min="0"
                />
              </div>

              <div>
                <label className="form-label">Bed Days (Non-ICU)</label>
                <input
                  type="number"
                  value={entry.bedDaysNonICU}
                  onChange={(e) => updateEntry(entry.id, 'bedDaysNonICU', parseInt(e.target.value) || 0)}
                  className="form-input"
                  min="0"
                />
              </div>

              <div>
                <label className="form-label">Gross Amount (₹)</label>
                <input
                  type="number"
                  value={entry.grossAmount}
                  onChange={(e) => updateEntry(entry.id, 'grossAmount', parseFloat(e.target.value) || 0)}
                  className="form-input"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="form-label">Discount (₹)</label>
                <input
                  type="number"
                  value={entry.discount}
                  onChange={(e) => updateEntry(entry.id, 'discount', parseFloat(e.target.value) || 0)}
                  className="form-input"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button 
                variant="outline" 
                onClick={() => deleteEntry(entry.id)}
                className="flex items-center space-x-2 text-red-600 border-red-300 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {entries.length === 0 && (
        <Card className="text-center py-12">
          <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Revenue Entries</h3>
          <p className="text-gray-600 mb-4">Start by adding your first revenue entry for this month.</p>
          <Button onClick={addNewEntry}>Add First Entry</Button>
        </Card>
      )}
    </div>
  );
}