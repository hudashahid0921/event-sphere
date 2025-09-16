import React from 'react';

export default function Support(){
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Support</h2>
      <p className="text-gray-600">Contact organizers for inquiries.</p>
      <form className="mt-4 space-y-3 max-w-xl">
        <input className="w-full p-2 border rounded" placeholder="Your name" />
        <input className="w-full p-2 border rounded" placeholder="Email" />
        <textarea className="w-full p-2 border rounded" rows={4} placeholder="Message"></textarea>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
          <button type="button" className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
}
