
import React from 'react';
import { Screen } from '../types';

interface ProfileProps {
  onNavigate: (screen: Screen) => void;
}

const Profile: React.FC<ProfileProps> = () => {
  const achievements = [
    { title: '10-Class Streak', icon: 'bolt', active: true },
    { title: 'First Inversion', icon: 'vertical_align_bottom', active: true },
    { title: 'Spin Queen', icon: 'auto_awesome', active: false },
    { title: 'Master', icon: 'workspace_premium', active: false },
  ];

  return (
    <div className="py-4 space-y-8 pb-32">
      {/* Profile Header */}
      <header className="px-6 text-center">
        <div className="relative inline-block mb-4">
          <div className="w-28 h-28 rounded-full p-1.5 bg-gradient-to-tr from-primary to-pink-400 shadow-xl">
            <img 
              alt="Elena" 
              className="w-full h-full rounded-full object-cover border-4 border-background-dark" 
              src="https://picsum.photos/seed/sarah/300/300" 
            />
          </div>
          <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full border-4 border-background-dark shadow-lg active:scale-90 transition-transform">
            <span className="material-icons-round text-sm">edit</span>
          </button>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Elena Rodriguez</h1>
        <div className="mt-2 flex items-center justify-center gap-3">
          <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Elite Member</span>
          <span className="text-slate-500 text-[10px] font-bold uppercase italic">Joined Mar 2023</span>
        </div>
      </header>

      {/* Subscription Mini Card */}
      <section className="px-6">
        <div className="bg-surface-dark/50 border border-primary/10 rounded-2xl p-5 flex items-center justify-between shadow-lg">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Monthly Unlimited</p>
            <p className="text-sm font-bold mt-1">Next Renewal: Oct 12</p>
          </div>
          <div className="text-right">
            <p className="text-primary font-black text-lg">Active</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase">12 classes this month</p>
          </div>
        </div>
      </section>

      {/* Skill Progress */}
      <section className="px-6 space-y-6">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <span className="material-icons-round text-primary">trending_up</span>
          Skill Progress
        </h2>
        <div className="space-y-4">
          <div className="bg-surface-dark p-5 rounded-2xl border border-white/5 shadow-md">
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Pole Dance</p>
                <p className="text-sm font-bold">Intermediate 2</p>
              </div>
              <p className="text-xs font-black text-primary">75%</p>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full w-3/4 shadow-[0_0_12px_rgba(236,19,128,0.6)]"></div>
            </div>
            <p className="mt-3 text-[9px] font-bold uppercase text-slate-500 tracking-wider italic">4 classes until Advanced evaluation</p>
          </div>

          <div className="bg-surface-dark p-5 rounded-2xl border border-white/5 shadow-md">
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Lyra (Aerial Hoop)</p>
                <p className="text-sm font-bold">Beginner 1</p>
              </div>
              <p className="text-xs font-black text-primary">30%</p>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full w-[30%] shadow-[0_0_12px_rgba(236,19,128,0.6)]"></div>
            </div>
            <p className="mt-3 text-[9px] font-bold uppercase text-slate-500 tracking-wider italic">Master the "Man in the Moon" to progress</p>
          </div>
        </div>
      </section>

      {/* Achievements Horizontal Scroll */}
      <section className="space-y-4">
        <div className="px-6 flex justify-between items-center">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <span className="material-icons-round text-primary">military_tech</span>
            Achievements
          </h2>
          <button className="text-primary text-[10px] font-black uppercase tracking-widest">View All</button>
        </div>
        <div className="flex overflow-x-auto gap-6 px-6 hide-scrollbar pb-2">
          {achievements.map((item, idx) => (
            <div key={idx} className={`flex-shrink-0 w-24 flex flex-col items-center gap-3 transition-opacity ${item.active ? 'opacity-100' : 'opacity-30 grayscale'}`}>
              <div className={`w-16 h-16 rounded-2xl rotate-45 flex items-center justify-center shadow-lg border-2 ${
                item.active ? 'bg-gradient-to-br from-primary to-pink-600 border-white/20' : 'bg-slate-800 border-white/5'
              }`}>
                <span className="material-icons-round text-white text-3xl -rotate-45">{item.icon}</span>
              </div>
              <p className="text-[9px] font-black uppercase text-center leading-tight tracking-wider">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Account List */}
      <section className="px-6 space-y-3">
        {[
          { label: 'Booking History', icon: 'calendar_today', color: 'bg-blue-500/20 text-blue-400' },
          { label: 'Subscription & Billing', icon: 'credit_card', color: 'bg-purple-500/20 text-purple-400' },
          { label: 'Account Settings', icon: 'settings', color: 'bg-slate-500/20 text-slate-400' },
        ].map((item, idx) => (
          <button key={idx} className="w-full flex items-center justify-between bg-surface-dark p-4 rounded-2xl group active:scale-[0.98] transition-transform shadow-sm border border-white/5">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                <span className="material-icons-round">{item.icon}</span>
              </div>
              <span className="font-bold text-sm text-slate-200">{item.label}</span>
            </div>
            <span className="material-icons-round text-slate-600 group-hover:text-primary transition-colors">chevron_right</span>
          </button>
        ))}
      </section>

      {/* Log Out */}
      <div className="px-6 mt-4">
        <button className="w-full py-4 text-slate-500 font-black uppercase tracking-[0.2em] text-[10px] hover:text-primary transition-colors border border-white/5 bg-white/2 rounded-2xl active:bg-primary/5">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
