import React from 'react';

export default function Auth(){
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-6 p-3 border rounded" />
        <button className="w-full bg-indigo-600 text-white py-3 rounded">Login</button>
      </div>
    </div>
  );
}
