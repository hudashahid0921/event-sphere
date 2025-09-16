import React from "react";
import { Link } from 'react-router-dom';

export default function Sidebar(){
  return (
    <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">Event Sphere</h2>
      <nav className="space-y-3">
        <Link to="/" className="block text-gray-700 hover:text-indigo-600">Dashboard</Link>
        <Link to="/exhibitors" className="block text-gray-700 hover:text-indigo-600">Exhibitors</Link>
        <Link to="/schedule" className="block text-gray-700 hover:text-indigo-600">Schedule</Link>
        <Link to="/booths" className="block text-gray-700 hover:text-indigo-600">Booth Map</Link>
        <Link to="/support" className="block text-gray-700 hover:text-indigo-600">Support</Link>
      </nav>
    </aside>
  );
}
