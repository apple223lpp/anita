import React, { useState } from 'react';
import { Search, Filter, History } from 'lucide-react';

export function BottomPanel() {
  const tabs = [
    'Balances', 
    'Positions', 
    'Open Orders', 
    'TWAP', 
    'Trade History', 
    'Funding History', 
    'Order History'
  ];
  
  const [activeTab, setActiveTab] = useState('Balances');

  return (
    <div className="flex flex-col h-full bg-[#0b0e11] text-xs">
      {/* Tabs Bar */}
      <div className="flex items-center justify-between px-4 border-b border-[#1E2026]">
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? 'border-white text-white font-medium' 
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table Header */}
      <div className="flex items-center px-4 py-2 text-gray-500 bg-[#0b0e11] border-b border-[#1E2026]">
        <div className="flex-1">Coin</div>
        <div className="flex-1 text-right">Total Balance</div>
        <div className="flex-1 text-right">Available Balance</div>
        <div className="flex-1 text-right">USDC Value <span className="text-[10px] align-top">▼</span></div>
        <div className="flex-1 text-right">PNL (ROE %)</div>
        <div className="flex-1 text-right">Contract</div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 text-gray-400 bg-[#0b0e11]">
        {activeTab === 'Balances' && (
           <div className="text-sm">No balances yet</div>
        )}
        {activeTab !== 'Balances' && (
           <div className="text-sm">No data</div>
        )}
      </div>
    </div>
  );
}
