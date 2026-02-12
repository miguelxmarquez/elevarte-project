
import React from 'react';
import { Screen, Progress } from '../types';

interface DashboardProps {
  onNavigate: (screen: Screen, params?: { id: string }) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const progressData: Progress[] = [
    { discipline: 'Pole Dance', level: 'Level 3: Advanced', completion: 82, icon: 'sports_gymnastics' },
    { discipline: 'Air Lyra', level: 'Level 2: Inter', completion: 45, icon: 'adjust' },
  ];

  return (
    <div className="px-6 py-4 space-y-8">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-primary font-black">Good Evening</p>
          <h1 className="text-2xl font-bold tracking-tight">Hi, Sarah Bloom</h1>
        </div>
        <div className="relative cursor-pointer" onClick={() => onNavigate('profile')}>
          <div className="w-12 h-12 rounded-full border-2 border-primary/30 p-0.5">
            <img 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover" 
              src="https://picsum.photos/seed/sarah/200/200"
            />
          </div>
          <span className="absolute top-0 right-0 w-3 h-3 bg-primary border-2 border-background-dark rounded-full"></span>
        </div>
      </header>

      {/* Hero Card */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-[#8e0b4d] p-6 text-white shadow-xl shadow-primary/20">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-20">
          <span className="material-icons-round text-[120px]">auto_awesome</span>
        </div>
        <div className="relative z-10 space-y-4">
          <div className="flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">Upcoming Session</span>
            <p className="text-2xl font-bold">In 45m</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Advanced Pole Flow</h2>
            <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
              <span className="material-icons-round text-xs">person</span>
              With Elena Rodriguez
            </p>
          </div>
          <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/60 uppercase">Studio</span>
                <span className="text-sm font-semibold">Room 102</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/60 uppercase">Credits</span>
                <span className="text-sm font-semibold">1 Class</span>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('details', { id: '1' })}
              className="bg-white text-primary px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform"
            >
              Details
            </button>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Your Progress</h3>
          <button className="text-primary text-[10px] font-black uppercase">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {progressData.map((p, i) => (
            <div key={i} className="bg-card-dark rounded-xl p-5 border border-primary/10 flex flex-col gap-4 relative overflow-hidden group">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                <span className="material-icons-round text-xl">{p.icon}</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">{p.discipline}</h4>
                <p className="text-primary text-[10px] font-bold uppercase">{p.level}</p>
              </div>
              <div className="space-y-2 mt-1">
                <div className="flex justify-between text-[8px] font-black uppercase opacity-60 tracking-widest">
                  <span>Completion</span>
                  <span>{p.completion}%</span>
                </div>
                <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(236,19,128,0.5)] transition-all duration-1000"
                    style={{ width: `${p.completion}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Quick Actions</h3>
        <div className="flex gap-3">
          <button 
            onClick={() => onNavigate('book')}
            className="flex-1 bg-primary py-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform"
          >
            <span className="material-icons-round text-white">calendar_today</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Book Class</span>
          </button>
          <button 
            onClick={() => onNavigate('membership')}
            className="flex-1 bg-card-dark border border-primary/30 py-4 rounded-xl flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <span className="material-icons-round text-primary">shopping_bag</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Buy Plan</span>
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card-dark/50 rounded-xl p-5 border border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex-1 text-center border-r border-white/10">
            <p className="text-2xl font-bold">12</p>
            <p className="text-[10px] uppercase text-white/50 tracking-wider font-bold">Classes This Month</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold">4</p>
            <p className="text-[10px] uppercase text-white/50 tracking-wider font-bold">Credits Left</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
