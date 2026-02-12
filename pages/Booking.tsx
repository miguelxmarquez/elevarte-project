
import React, { useState } from 'react';
import { Screen, ClassSession } from '../types';

interface BookingProps {
  onNavigate: (screen: Screen, params?: { id: string }) => void;
}

const Booking: React.FC<BookingProps> = ({ onNavigate }) => {
  const [activeDay, setActiveDay] = useState(13);
  const [activeCategory, setActiveCategory] = useState<'Pole' | 'Lyra'>('Pole');

  const days = [
    { label: 'MON', date: 12 },
    { label: 'TUE', date: 13 },
    { label: 'WED', date: 14 },
    { label: 'THU', date: 15 },
    { label: 'FRI', date: 16 },
    { label: 'SAT', date: 17 },
  ];

  const classes: ClassSession[] = [
    { id: '1', title: 'Level 1 Pole', instructor: 'Sarah Jenkins', time: '17:00', duration: '60 MIN', spotsLeft: 8, isFull: false, intensity: 'Medium', level: 'Beginner', room: 'A', },
    { id: '2', title: 'Pole Flow & Spin', instructor: 'Mike Dawson', time: '18:15', duration: '90 MIN', spotsLeft: 2, isFull: false, intensity: 'High', level: 'Intermediate', room: 'B', },
    { id: '3', title: 'Intermediate Pole', instructor: 'Sarah Jenkins', time: '19:30', duration: '60 MIN', spotsLeft: 0, isFull: true, intensity: 'High', level: 'Intermediate', room: 'A', },
    { id: '4', title: 'Flexibility & Core', instructor: 'Anna Wu', time: '20:45', duration: '45 MIN', spotsLeft: 12, isFull: false, intensity: 'Low', level: 'All Levels', room: 'B', },
  ];

  return (
    <div className="space-y-4">
      <header className="px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Book Class</h1>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Academy Hub</p>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-slate-400">
            <span className="material-icons-round">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary cursor-pointer" onClick={() => onNavigate('profile')}>
            <img className="w-full h-full object-cover" src="https://picsum.photos/seed/sarah/200/200" />
          </div>
        </div>
      </header>

      {/* Date Ribbon */}
      <div className="px-4 py-2">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {days.map((d) => (
            <button
              key={d.date}
              onClick={() => setActiveDay(d.date)}
              className={`flex-shrink-0 w-14 h-20 rounded-xl flex flex-col items-center justify-center transition-all ${
                activeDay === d.date 
                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                : 'bg-surface-dark text-slate-500'
              }`}
            >
              <span className="text-[10px] font-black">{d.label}</span>
              <span className="text-lg font-bold">{d.date}</span>
              {activeDay === d.date && <div className="w-1 h-1 rounded-full bg-white mt-1"></div>}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle */}
      <div className="px-6 py-2">
        <div className="bg-surface-dark p-1 rounded-xl flex">
          {(['Pole', 'Lyra'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-1 py-2.5 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${
                activeCategory === cat ? 'bg-primary text-white shadow-md' : 'text-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="px-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-lg">Available Classes</h2>
          <button className="text-primary text-[10px] font-black uppercase flex items-center gap-1">
            <span className="material-icons-round text-sm">tune</span> Filters
          </button>
        </div>

        {classes.map((c) => (
          <div 
            key={c.id} 
            className={`bg-surface-dark rounded-xl p-4 border border-white/5 shadow-sm transition-opacity ${c.isFull ? 'opacity-60 grayscale' : 'hover:border-primary/30 cursor-pointer'}`}
            onClick={() => !c.isFull && onNavigate('details', { id: c.id })}
          >
            <div className="flex gap-4">
              <div className="flex flex-col items-center justify-center pr-4 border-r border-white/10 min-w-[64px]">
                <span className="text-sm font-bold">{c.time}</span>
                <span className="text-[8px] text-slate-500 font-black uppercase tracking-tighter">{c.duration}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm leading-tight">{c.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">with {c.instructor}</p>
                <div className="mt-2 flex items-center">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${
                    c.isFull ? 'bg-slate-500/10 text-slate-400' : 'bg-primary/10 text-primary'
                  }`}>
                    {c.isFull ? 'Class Full' : `${c.spotsLeft} Spots Left`}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <button className={`text-[10px] font-black py-2 px-4 rounded-lg active:scale-95 transition-transform ${
                  c.isFull ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-primary text-white shadow-md shadow-primary/20'
                }`}>
                  {c.isFull ? 'WAITLIST' : 'RESERVE'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
