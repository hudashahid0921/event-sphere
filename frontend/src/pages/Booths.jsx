import React from 'react';

export default function Booths(){
  const booths = Array.from({length:12}).map((_,i)=>({label:`A${i+1}`, reserved: i%4===0}));
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Booth Map</h2>
      <div className="grid grid-cols-4 gap-3">
        {booths.map(b=>(
          <div key={b.label} className={`p-4 rounded text-center ${b.reserved ? 'bg-red-100 text-red-700' : 'bg-green-50 text-green-700'}`}>
            <div className="font-semibold">{b.label}</div>
            <div className="text-xs">{b.reserved ? 'Reserved' : 'Available'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
