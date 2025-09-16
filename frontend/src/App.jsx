import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Exhibitors from './pages/Exhibitors';
import Schedule from './pages/Schedule';
import Booths from './pages/Booths';
import Support from './pages/Support';
import Auth from './pages/Auth';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 flex-1 overflow-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/exhibitors" element={<Exhibitors />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/booths" element={<Booths />} />
              <Route path="/support" element={<Support />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
