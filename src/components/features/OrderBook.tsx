import React from 'react';
import { MoreVertical } from 'lucide-react';

const generateAsks = () => {
  return Array.from({ length: 14 }).map((_, i) => ({
    price: (40.816 - i * 0.002).toFixed(3),
    size: (Math.random() * 1000).toFixed(2),
    total: (Math.random() * 5000).toFixed(2),
  }));
};

const generateBids = () => {
  return Array.from({ length: 14 }).map((_, i) => ({
    price: (40.773 - i * 0.003).toFixed(3),
    size: (Math.random() * 1000).toFixed(2),
    total: (Math.random() * 5000).toFixed(2),
  }));
};

const asks = generateAsks();
const bids = generateBids();

const maxTotal = 5000;

export function OrderBook() {
  return (
    <div className="flex flex-col h-full bg-[#0b0e11] text-xs font-mono">
      {/* Header Tabs */}
      <div className="flex items-center justify-between px-2 py-2 border-b border-[#1E2026]">
        <div className="flex gap-4">
          <button className="text-white font-medium border-b-2 border-white pb-1">Order Book</button>
          <button className="text-gray-500 hover:text-white transition-colors pb-1">Trades</button>
        </div>
        <button className="text-gray-500 hover:text-white">
          <MoreVertical size={14} />
        </button>
      </div>

      {/* Column Headers */}
      <div className="flex items-center px-2 py-1 text-gray-500 text-[10px] mt-1">
        <div className="flex-1 text-left">Price</div>
        <div className="flex-1 text-right">Size (HYPE)</div>
        <div className="flex-1 text-right">Total (HYPE)</div>
      </div>

      {/* Order List */}
      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
        {/* Asks (Red) */}
        <div className="flex flex-col-reverse"> {/* Reverse to show lowest ask at bottom */}
          {asks.map((ask, i) => (
            <div key={i} className="flex items-center px-2 py-0.5 hover:bg-[#1E2026] relative group">
              <div 
                className="absolute right-0 top-0 bottom-0 bg-red-500/10 transition-all duration-300"
                style={{ width: `${(parseFloat(ask.total) / maxTotal) * 100}%` }}
              ></div>
              <div className="flex-1 text-red-400 z-10">{ask.price}</div>
              <div className="flex-1 text-right text-white z-10">{ask.size}</div>
              <div className="flex-1 text-right text-gray-500 z-10">{ask.total}</div>
            </div>
          ))}
        </div>

        {/* Spread Info */}
        <div className="py-1 my-1 border-y border-[#1E2026] flex items-center justify-center gap-4 text-gray-400">
           <span>Spread</span>
           <span>0.019</span>
           <span>0.047%</span>
        </div>

        {/* Bids (Green) */}
        <div className="flex flex-col">
          {bids.map((bid, i) => (
            <div key={i} className="flex items-center px-2 py-0.5 hover:bg-[#1E2026] relative">
               <div 
                className="absolute right-0 top-0 bottom-0 bg-green-500/10 transition-all duration-300"
                style={{ width: `${(parseFloat(bid.total) / maxTotal) * 100}%` }}
              ></div>
               <div className="flex-1 text-green-400 z-10">{bid.price}</div>
               <div className="flex-1 text-right text-white z-10">{bid.size}</div>
               <div className="flex-1 text-right text-gray-500 z-10">{bid.total}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom controls */}
      <div className="flex items-center justify-between px-2 py-2 border-t border-[#1E2026] text-gray-400">
         <span className="text-[10px]">Filter</span>
         <label className="flex items-center gap-1 text-[10px] cursor-pointer">
            <input type="checkbox" className="rounded bg-[#1E2026] border-gray-700" />
            Hide Small Balances
         </label>
      </div>
    </div>
  );
}
