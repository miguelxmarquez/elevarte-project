
import React from 'react';

interface ClassDetailsProps {
  id: string | null;
  onBack: () => void;
}

const ClassDetails: React.FC<ClassDetailsProps> = ({ id, onBack }) => {
  return (
    <div className="relative min-h-screen bg-background-dark pb-32">
      {/* Fixed Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto active:scale-90 transition-transform">
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto">
          <span className="material-icons-round">share</span>
        </button>
      </div>

      {/* Hero */}
      <div className="relative h-[45vh] w-full overflow-hidden">
        <img 
          alt="Class Hero" 
          className="w-full h-full object-cover" 
          src="https://picsum.photos/seed/aerial/600/800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">Intermediate</span>
            <span className="bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-primary/30">60 Min</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-1">Static Pole Flow</h1>
          <p className="text-slate-300 flex items-center gap-2 text-sm font-medium">
            <span className="material-icons-round text-sm">calendar_today</span>
            Today, 6:30 PM • Studio A
          </p>
        </div>
      </div>

      <div className="px-6 py-8 space-y-10">
        {/* Intensity */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Intensity Level</h3>
          <div className="flex items-center gap-4 bg-primary/5 border border-primary/10 p-4 rounded-2xl">
            <div className="flex gap-1.5">
              {[1, 1, 0].map((active, i) => (
                <div key={i} className={`w-2 h-7 rounded-full ${active ? 'bg-primary' : 'bg-primary/20'}`}></div>
              ))}
            </div>
            <div>
              <p className="font-bold text-slate-100">Medium High</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase">Focus on core strength & transitions</p>
            </div>
          </div>
        </section>

        {/* Instructor */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Your Instructor</h3>
          <div className="flex items-start gap-4">
            <img 
              alt="Elena" 
              className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20" 
              src="https://picsum.photos/seed/elena/100/100" 
            />
            <div className="flex-1">
              <h4 className="text-xl font-bold text-slate-100">Elena Volkov</h4>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Certified master instructor with 12 years of professional performance background. Elena specializes in contemporary pole flow.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Requirements</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: 'checkroom', text: 'Shorts Required' },
              { icon: 'do_not_disturb_on', text: 'No Body Lotion' },
              { icon: 'water_drop', text: 'Grip Aid Advised' },
              { icon: 'history', text: 'Intro Level Exp' },
            ].map((req, i) => (
              <div key={i} className="flex items-center gap-3 bg-surface-dark border border-white/5 p-3 rounded-xl">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-icons-round text-lg">{req.icon}</span>
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-300">{req.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Attendance */}
        <section className="pb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-primary">Joining the class</h3>
            <span className="text-[10px] font-bold text-slate-500 uppercase">8 / 12 Spots Filled</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map(i => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-background-dark" src={`https://picsum.photos/seed/u${i}/100/100`} />
              ))}
              <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-background-dark flex items-center justify-center text-[10px] font-black text-primary">
                +3
              </div>
            </div>
            <p className="text-xs text-slate-400 font-medium italic">Join Mia and 7 others</p>
          </div>
        </section>
      </div>

      {/* Sticky Bottom Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background-dark/80 backdrop-blur-xl border-t border-white/5 px-6 pt-4 pb-8 safe-area-bottom z-50">
        <div className="flex items-center justify-between gap-6 max-w-md mx-auto">
          <div>
            <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-1">Pricing</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">$25</span>
              <span className="text-[10px] font-bold uppercase text-slate-500">/ class</span>
            </div>
          </div>
          <button 
            className="flex-1 bg-primary text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Confirm Booking</span>
            <span className="material-icons-round">arrow_forward</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ClassDetails;
