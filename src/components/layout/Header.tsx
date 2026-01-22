import React from 'react';
import { Settings, Globe, ChevronDown, Search } from 'lucide-react';

export function Header() {
  const navItems = ['Trade', 'Vaults', 'Portfolio', 'Staking', 'Referrals', 'Leaderboard'];

  return (
    <header className="h-14 px-4 flex items-center justify-between bg-[#0b0e11] text-sm">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-[#0b0e11] rounded-full"></div>
          </div>
          <span className="font-bold text-lg text-white tracking-tight">Hyperliquid</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`font-medium hover:text-white transition-colors ${item === 'Trade' ? 'text-teal-400' : 'text-gray-400'}`}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-1 text-gray-400 hover:text-white cursor-pointer">
            More <ChevronDown size={14} />
          </div>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* Search (Implicit) */}
        
        {/* Right Actions */}
        <button className="bg-teal-400 hover:bg-teal-300 text-black font-bold py-1.5 px-4 rounded text-sm transition-colors">
          Connect
        </button>
        
        <div className="flex items-center gap-3 text-gray-400 border-l border-gray-800 pl-4">
          <button className="hover:text-white transition-colors">
            <Settings size={20} />
          </button>
          <button className="hover:text-white transition-colors">
            <Globe size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
