import React from 'react';

export default function Navbar(){
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold">ES</div>
        <div>
          <div className="font-semibold">Event Sphere</div>
          <div className="text-xs text-gray-500">Exhibitor Portal</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-3 py-1 rounded border">Settings</button>
        <button className="px-3 py-1 rounded bg-indigo-600 text-white">Sign in</button>
      </div>
    </header>
  );
}
