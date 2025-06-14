import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import HospitalData from './pages/HospitalData'
import RevenueData from './pages/RevenueData'
import ExpensesData from './pages/ExpensesData'
import MetadataEntry from './pages/MetadataEntry'
import ToolsOverview from './pages/ToolsOverview'
import ToolDetail from './pages/ToolDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/hospital-data" element={<HospitalData />} />
        <Route path="/dashboard/hospital-data/revenue" element={<RevenueData />} />
        <Route path="/dashboard/hospital-data/expenses" element={<ExpensesData />} />
        <Route path="/dashboard/hospital-data/metadata" element={<MetadataEntry />} />
        <Route path="/dashboard/tools" element={<ToolsOverview />} />
        <Route path="/dashboard/tools/:tool" element={<ToolDetail />} />
      </Routes>
    </Layout>
  )
}

export default App