import React from 'react';

export default function Dashboard(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Exhibitors</h3>
        <p className="text-3xl font-bold text-indigo-600 mt-2">0</p>
        <p className="text-sm text-gray-500 mt-2">Total registered exhibitors</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Sessions</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">0</p>
        <p className="text-sm text-gray-500 mt-2">Upcoming sessions</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Reserved Booths</h3>
        <p className="text-3xl font-bold text-purple-600 mt-2">0</p>
        <p className="text-sm text-gray-500 mt-2">Booths reserved by exhibitors</p>
      </div>

      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-700 font-semibold">Latest Exhibitors</h3>
        <div className="mt-4 space-y-3">
          <div className="p-3 border rounded flex items-center justify-between">
            <div>
              <div className="font-medium">Alpha Textiles</div>
              <div className="text-xs text-gray-500">Clothing · Booth A01</div>
            </div>
            <div className="text-indigo-600">View</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-700 font-semibold">Quick Actions</h3>
        <div className="mt-4 space-y-2">
          <button className="w-full py-2 rounded bg-indigo-600 text-white">Add Exhibitor</button>
          <button className="w-full py-2 rounded border">Seed Booths</button>
        </div>
      </div>
    </div>
  );
}
