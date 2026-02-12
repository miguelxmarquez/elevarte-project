
import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-background-dark/95 backdrop-blur-xl border-t border-white/5 safe-area-bottom z-50">
      <div className="flex items-center justify-around h-16">
        <button 
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'home' ? 'text-primary' : 'text-white/40'}`}
        >
          <span className="material-icons-round">home</span>
          <span className="text-[10px] font-bold uppercase">Home</span>
        </button>

        <button 
          onClick={() => onNavigate('book')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'book' ? 'text-primary' : 'text-white/40'}`}
        >
          <span className="material-icons-round">event_note</span>
          <span className="text-[10px] font-bold uppercase">Schedule</span>
        </button>

        <div className="relative -top-6">
          <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/40 border-4 border-background-dark active:scale-90 transition-transform">
            <span className="material-icons-round text-white text-3xl">add</span>
          </button>
        </div>

        <button 
          onClick={() => onNavigate('membership')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'membership' ? 'text-primary' : 'text-white/40'}`}
        >
          <span className="material-icons-round">loyalty</span>
          <span className="text-[10px] font-bold uppercase">Passes</span>
        </button>

        <button 
          onClick={() => onNavigate('profile')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeScreen === 'profile' ? 'text-primary' : 'text-white/40'}`}
        >
          <span className="material-icons-round">person</span>
          <span className="text-[10px] font-bold uppercase">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
