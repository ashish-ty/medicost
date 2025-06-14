import React, { useState } from 'react';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import MonthSwitcher from '../../../components/MonthSwitcher';
import { Save, Users, Bed, UserCheck, Wrench } from 'lucide-react';

interface MetadataEntry {
  availableBedsICU: number;
  availableBedsNonICU: number;
  numberOfNurses: number;
  numberOfResidentDoctors: number;
  numberOfTechnicians: number;
  numberOfSupportStaff: number;
}

export default function MetadataEntry() {
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [metadata, setMetadata] = useState<MetadataEntry>({
    availableBedsICU: 0,
    availableBedsNonICU: 0,
    numberOfNurses: 0,
    numberOfResidentDoctors: 0,
    numberOfTechnicians: 0,
    numberOfSupportStaff: 0
  });

  const updateMetadata = (key: keyof MetadataEntry, value: number) => {
    setMetadata(prev => ({ ...prev, [key]: value }));
  };

  const saveData = () => {
    // Dummy save function
    alert('Hospital metadata saved successfully!');
  };

  const totalBeds = metadata.availableBedsICU + metadata.availableBedsNonICU;
  const totalStaff = metadata.numberOfNurses + metadata.numberOfResidentDoctors + 
                    metadata.numberOfTechnicians + metadata.numberOfSupportStaff;

  const metadataFields = [
    {
      key: 'availableBedsICU',
      label: 'Available ICU Beds',
      description: 'Number of ICU beds available for patients',
      icon: <Bed className="w-6 h-6 text-red-600" />,
      color: 'bg-red-50 border-red-200'
    },
    {
      key: 'availableBedsNonICU',
      label: 'Available Non-ICU Beds',
      description: 'Number of general ward beds available',
      icon: <Bed className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      key: 'numberOfNurses',
      label: 'Number of Nurses',
      description: 'Total nursing staff count',
      icon: <UserCheck className="w-6 h-6 text-green-600" />,
      color: 'bg-green-50 border-green-200'
    },
    {
      key: 'numberOfResidentDoctors',
      label: 'Number of Resident Doctors',
      description: 'Resident and junior doctors on staff',
      icon: <Users className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-50 border-purple-200'
    },
    {
      key: 'numberOfTechnicians',
      label: 'Number of Technicians',
      description: 'Medical and laboratory technicians',
      icon: <Wrench className="w-6 h-6 text-orange-600" />,
      color: 'bg-orange-50 border-orange-200'
    },
    {
      key: 'numberOfSupportStaff',
      label: 'Number of Support Staff',
      description: 'Administrative and support personnel',
      icon: <Users className="w-6 h-6 text-gray-600" />,
      color: 'bg-gray-50 border-gray-200'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hospital Metadata</h1>
          <p className="text-gray-600 mt-1">Maintain hospital capacity and staffing information</p>
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-primary/10 border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Available Beds</p>
              <p className="text-3xl font-bold text-primary">{totalBeds}</p>
              <p className="text-sm text-gray-500">
                ICU: {metadata.availableBedsICU} | Non-ICU: {metadata.availableBedsNonICU}
              </p>
            </div>
            <Bed className="w-12 h-12 text-primary" />
          </div>
        </Card>
        
        <Card className="bg-secondary/20 border-secondary/40">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Staff Count</p>
              <p className="text-3xl font-bold text-primary">{totalStaff}</p>
              <p className="text-sm text-gray-500">
                Medical & Support Personnel
              </p>
            </div>
            <Users className="w-12 h-12 text-primary" />
          </div>
        </Card>
      </div>

      {/* Metadata Entry Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {metadataFields.map((field) => (
          <Card key={field.key} className={field.color}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {field.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {field.label}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {field.description}
                </p>
                <div>
                  <label className="form-label">Count</label>
                  <input
                    type="number"
                    value={metadata[field.key as keyof MetadataEntry]}
                    onChange={(e) => updateMetadata(field.key as keyof MetadataEntry, parseInt(e.target.value) || 0)}
                    className="form-input"
                    min="0"
                    placeholder="Enter count"
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Staff Distribution */}
      <Card title="Staff Distribution">
        <div className="space-y-4">
          {[
            { label: 'Nurses', value: metadata.numberOfNurses, color: 'bg-green-500' },
            { label: 'Resident Doctors', value: metadata.numberOfResidentDoctors, color: 'bg-purple-500' },
            { label: 'Technicians', value: metadata.numberOfTechnicians, color: 'bg-orange-500' },
            { label: 'Support Staff', value: metadata.numberOfSupportStaff, color: 'bg-gray-500' }
          ].map((item) => {
            const percentage = totalStaff > 0 ? (item.value / totalStaff) * 100 : 0;
            
            return (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    <span className="text-sm text-gray-600">{item.value} staff</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${item.color} h-2 rounded-full transition-all duration-300`}
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