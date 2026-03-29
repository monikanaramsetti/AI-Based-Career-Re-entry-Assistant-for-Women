import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import CareerStoryForm from './pages/CareerStoryForm';
import AIAnalysisDashboard from './pages/AIAnalysisDashboard';
import JobOpportunities from './pages/JobOpportunities';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="story" element={<CareerStoryForm />} />
          <Route path="dashboard" element={<AIAnalysisDashboard />} />
          <Route path="jobs" element={<JobOpportunities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
