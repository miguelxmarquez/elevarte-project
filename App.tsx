
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking';
import Membership from './pages/Membership';
import Profile from './pages/Profile';
import ClassDetails from './pages/ClassDetails';
import BottomNav from './components/BottomNav';
import { Screen } from './types';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);

  const navigateTo = (screen: Screen, params?: { id: string }) => {
    if (params?.id) setSelectedClassId(params.id);
    setActiveScreen(screen);
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <Dashboard onNavigate={navigateTo} />;
      case 'book':
        return <Booking onNavigate={navigateTo} />;
      case 'membership':
        return <Membership onNavigate={navigateTo} />;
      case 'profile':
        return <Profile onNavigate={navigateTo} />;
      case 'details':
        return <ClassDetails id={selectedClassId} onBack={() => setActiveScreen('book')} />;
      default:
        return <Dashboard onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative bg-background-dark shadow-2xl overflow-x-hidden">
      {/* Simulation of iOS Status Bar */}
      <div className="h-11 flex items-center justify-between px-6 pt-2 sticky top-0 bg-background-dark/80 backdrop-blur-lg z-50">
        <span className="text-sm font-semibold">9:41</span>
        <div className="flex gap-1.5 items-center">
          <span className="material-icons-round text-sm">signal_cellular_alt</span>
          <span className="material-icons-round text-sm">wifi</span>
          <span className="material-icons-round text-sm">battery_full</span>
        </div>
      </div>

      <main className="pb-24">
        {renderScreen()}
      </main>

      {activeScreen !== 'details' && (
        <BottomNav activeScreen={activeScreen} onNavigate={navigateTo} />
      )}
    </div>
  );
};

export default App;
