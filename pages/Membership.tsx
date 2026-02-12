
import React, { useState } from 'react';
import { Screen } from '../types';

interface MembershipProps {
  onNavigate: (screen: Screen) => void;
}

const Membership: React.FC<MembershipProps> = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const plans = [
    {
      name: 'Basic',
      price: billingCycle === 'monthly' ? 89 : 71,
      description: '4 Classes Per Month',
      features: ['Access to all Intro classes', 'Community forum access', '1 Guest pass per quarter'],
      highlight: false
    },
    {
      name: 'Standard',
      price: billingCycle === 'monthly' ? 159 : 127,
      description: '8 Classes Per Month',
      features: ['Everything in Basic', 'Priority booking (48h early)', '15% off workshops', 'Advanced aerial access'],
      highlight: true
    },
    {
      name: 'Unlimited',
      price: billingCycle === 'monthly' ? 249 : 199,
      description: 'No Class Limits',
      features: ['Unlimited regular classes', 'Free open studio rental', '2 Guest passes per month', 'Free Academy jersey'],
      highlight: false
    }
  ];

  return (
    <div className="space-y-6">
      <header className="px-6 py-4 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary active:scale-90 transition-transform">
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-bold">Memberships</h1>
        <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-icons-round">help_outline</span>
        </button>
      </header>

      {/* Cycle Toggle */}
      <div className="px-6">
        <div className="bg-primary/10 p-1.5 rounded-xl flex items-center">
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`flex-1 py-2.5 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${billingCycle === 'monthly' ? 'bg-primary text-white shadow-lg' : 'text-slate-500'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBillingCycle('annually')}
            className={`flex-1 py-2.5 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${billingCycle === 'annually' ? 'bg-primary text-white shadow-lg' : 'text-slate-500'}`}
          >
            Annually <span className="text-[10px] text-primary ml-1">-20%</span>
          </button>
        </div>
      </div>

      {/* Horizontal Cards */}
      <div className="overflow-x-auto pb-8 hide-scrollbar flex snap-x snap-mandatory px-6 gap-5">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`snap-center shrink-0 w-[85%] rounded-2xl p-6 shadow-2xl flex flex-col relative overflow-hidden transition-all duration-500 ${
              plan.highlight 
              ? 'bg-gradient-to-br from-primary/30 via-background-dark to-background-dark border-2 border-primary' 
              : 'bg-surface-dark border border-white/5'
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full animate-pulse">
                <span className="text-[8px] font-black uppercase tracking-widest text-white">Most Popular</span>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className={`text-lg font-bold ${plan.highlight ? 'text-primary' : 'text-slate-400'}`}>{plan.name}</h3>
              <div className="flex items-baseline mt-2">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-slate-500 ml-1">/mo</span>
              </div>
              <p className={`font-bold mt-1 text-[10px] uppercase tracking-widest ${plan.highlight ? 'text-white/80' : 'text-primary'}`}>{plan.description}</p>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {plan.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="material-icons-round text-primary text-sm">check_circle</span>
                  <span className="text-xs text-slate-200">{f}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>

      {/* Packs */}
      <section className="px-6 mt-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Class Packs</h2>
          <span className="text-primary text-[10px] font-black uppercase tracking-widest">One-time payment</span>
        </div>
        <div className="space-y-4">
          {[
            { name: 'Single Drop-in', days: 30, price: 35, icon: 'style' },
            { name: '5-Class Pack', days: 60, price: 160, icon: 'filter_5' },
            { name: '10-Class Pack', days: 90, price: 295, icon: 'filter_9_plus' },
          ].map((pack, i) => (
            <div key={i} className="bg-surface-dark/50 border border-primary/10 rounded-xl p-5 flex items-center justify-between group active:bg-primary/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-icons-round">{pack.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">{pack.name}</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Valid for {pack.days} days</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lg font-bold">${pack.price}</span>
                <button className="text-[10px] font-black text-primary mt-1 border border-primary/30 px-3 py-1 rounded-full uppercase active:bg-primary active:text-white transition-all">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Membership;
