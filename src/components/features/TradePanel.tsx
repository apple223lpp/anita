import React, { useState } from 'react';
import { Settings, ChevronDown, RefreshCw, MoreHorizontal, X } from 'lucide-react';

export function TradePanel() {
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [orderType, setOrderType] = useState('Market');

  return (
    <div className="flex flex-col h-full bg-[#0b0e11] text-xs">
      {/* Top Tabs */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#1E2026]">
        <div className="flex gap-4">
          {['Market', 'Limit', 'Pro'].map((type) => (
            <button 
              key={type}
              onClick={() => setOrderType(type)}
              className={`font-medium pb-1 transition-colors ${
                orderType === type 
                  ? 'text-white border-b-2 border-white' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <button className="text-gray-500 hover:text-white">
          <ChevronDown size={14} />
        </button>
      </div>

      {/* Buy/Sell Toggles */}
      <div className="flex p-2 gap-2">
        <button 
          onClick={() => setSide('buy')}
          className={`flex-1 py-1.5 rounded font-bold transition-colors ${
            side === 'buy' ? 'bg-teal-400 text-black' : 'bg-[#1E2026] text-gray-400 hover:text-white'
          }`}
        >
          Buy
        </button>
        <button 
          onClick={() => setSide('sell')}
          className={`flex-1 py-1.5 rounded font-bold transition-colors ${
            side === 'sell' ? 'bg-red-500 text-white' : 'bg-[#1E2026] text-gray-400 hover:text-white'
          }`}
        >
          Sell
        </button>
      </div>

      {/* Form Content */}
      <div className="px-3 py-2 flex flex-col gap-4">
        <div className="flex justify-between text-gray-400">
          <span>Available to Trade</span>
          <span>0.00 USDC</span>
        </div>

        {/* Size Input */}
        <div className="bg-[#1E2026] rounded p-2 flex items-center justify-between border border-transparent focus-within:border-teal-400">
          <div className="flex flex-col gap-0.5">
             <span className="text-[10px] text-gray-500">Size</span>
             <input type="text" placeholder="0" className="bg-transparent text-white outline-none w-24 font-mono text-sm" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white text-gray-400">
            HYPE <ChevronDown size={12} />
          </div>
        </div>

        {/* Slider */}
        <div className="flex items-center gap-2">
           <div className="flex-1 h-1 bg-[#2D3039] rounded relative">
             <div className="absolute left-0 top-0 h-full w-0 bg-teal-400 rounded"></div>
             {/* Slider Thumb */}
             <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-teal-400 rounded-full cursor-pointer"></div>
             {/* Ticks */}
             {[0, 25, 50, 75, 100].map(pct => (
                <div key={pct} className="absolute top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-600 rounded-full" style={{ left: `${pct}%` }}></div>
             ))}
           </div>
           <div className="bg-[#1E2026] px-1.5 py-0.5 rounded text-gray-400 text-[10px] flex items-center gap-1">
             0 <span className="text-gray-600">%</span>
           </div>
        </div>

        {/* Connect Button */}
        <button className="w-full bg-teal-400 hover:bg-teal-300 text-black font-bold py-2.5 rounded text-sm mt-2 transition-colors">
          Connect
        </button>

        {/* Order Details */}
        <div className="flex flex-col gap-1.5 pt-2 text-gray-500 text-[11px]">
          <div className="flex justify-between">
             <span>Order Value</span>
             <span className="text-white">N/A</span>
          </div>
          <div className="flex justify-between">
             <span>Slippage</span>
             <div className="flex flex-col items-end">
                <span className="text-white">Est: 0% / Max: 8.00%</span>
             </div>
          </div>
          <div className="flex justify-between">
             <span>Fees</span>
             <div className="flex items-center gap-1 text-teal-400">
               <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
               0.0600% / 0.0300%
             </div>
          </div>
        </div>
      </div>

      <div className="flex-1"></div>

      {/* Bottom Area */}
      <div className="border-t border-[#1E2026] p-3 flex flex-col gap-3">
         <button className="w-full bg-[#1E2026] hover:bg-[#2D3039] text-teal-400 font-medium py-1.5 rounded transition-colors">
            Deposit
         </button>
         
         <div className="flex gap-2">
            <button className="flex-1 bg-[#1E2026] hover:bg-[#2D3039] text-gray-400 py-1.5 rounded flex items-center justify-center gap-2 border border-transparent hover:border-gray-600 transition-colors">
               <RefreshCw size={12} /> Perps | Spot
            </button>
            <button className="flex-1 bg-[#1E2026] hover:bg-[#2D3039] text-gray-400 py-1.5 rounded transition-colors">
               Withdraw
            </button>
         </div>

         {/* Account Equity */}
         <div className="mt-2">
            <div className="flex justify-between items-center text-gray-400 mb-1">
                <span>Account Equity</span>
                <span className="text-white font-mono">$0.00</span>
            </div>
         </div>
      </div>
    </div>
  );
}
