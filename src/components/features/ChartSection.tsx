import React from 'react';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Bar,
  ReferenceLine
} from 'recharts';
import { Star, ChevronDown, Settings, Maximize2, Camera, Copy, List } from 'lucide-react';

const generateData = () => {
  let price = 40.786;
  const data = [];
  for (let i = 0; i < 100; i++) {
    const open = price;
    const close = price + (Math.random() - 0.5) * 0.2; // Smaller variance for realistic look
    const high = Math.max(open, close) + Math.random() * 0.1;
    const low = Math.min(open, close) - Math.random() * 0.1;
    const volume = Math.random() * 1000;
    
    price = close;
    
    data.push({
      time: i,
      open,
      close,
      high,
      low,
      volume,
      isUp: close >= open
    });
  }
  return data;
};

const data = generateData();

const CustomShape = (props: any) => {
  const { x, y, width, height, payload, yAxis } = props;
  
  // Guard against missing yAxis or payload during initial render
  if (!yAxis || !payload) return null;

  const isUp = payload.isUp;
  const color = isUp ? '#22c55e' : '#ef4444'; // green-500 : red-500
  
  // Wick coordinates
  const yHigh = yAxis.scale(payload.high);
  const yLow = yAxis.scale(payload.low);
  const xCenter = x + width / 2;

  // Body coordinates
  const yOpen = yAxis.scale(payload.open);
  const yClose = yAxis.scale(payload.close);
  const bodyTop = Math.min(yOpen, yClose);
  const bodyHeight = Math.abs(yOpen - yClose);

  return (
    <g>
      {/* Wick */}
      <line x1={xCenter} y1={yHigh} x2={xCenter} y2={yLow} stroke={color} strokeWidth={1} />
      {/* Body */}
      <rect x={x} y={bodyTop} width={width} height={Math.max(1, bodyHeight)} fill={color} />
    </g>
  );
};

export function ChartSection() {
  return (
    <div className="flex flex-col h-full bg-[#0b0e11] text-gray-300">
      {/* Top Info Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2026]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-lg">HYPE/USDC</span>
              <span className="px-1.5 py-0.5 bg-[#1E2E28] text-green-400 text-xs rounded border border-green-900/30">Spot</span>
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Price</span>
            <span className="text-red-400 font-mono">40.786</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-gray-500">24h Change</span>
            <span className="text-green-400 font-mono">+1.073 / +2.70%</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-gray-500">24h Volume</span>
            <span className="text-white font-mono">119,654,624.12 USDC</span>
          </div>
           
           {/* Hidden on small screens */}
          <div className="hidden xl:flex flex-col">
            <span className="text-xs text-gray-500">Market Cap</span>
            <span className="text-white font-mono">13,751,454,977 USDC</span>
          </div>

          <div className="hidden 2xl:flex flex-col group cursor-pointer">
             <span className="text-xs text-gray-500">Contract</span>
             <div className="flex items-center gap-1 text-gray-300 hover:text-white">
                <span className="font-mono text-xs">0x0d01...11ec</span>
                <Copy size={12} />
             </div>
          </div>
        </div>
      </div>

      {/* Chart Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#1E2026] bg-[#0b0e11]">
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
                {['5m', '1h', '4h', 'D'].map(tf => (
                    <button key={tf} className={`px-2 py-1 text-xs rounded hover:bg-[#1E2026] ${tf === '1h' ? 'text-white font-bold bg-[#1E2026]' : 'text-gray-500'}`}>
                        {tf}
                    </button>
                ))}
                <button className="px-2 py-1 text-xs text-gray-500 hover:text-white hover:bg-[#1E2026] rounded">
                    <ChevronDown size={12} />
                </button>
            </div>
            
            <div className="w-px h-4 bg-[#1E2026]"></div>

            <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-white px-2 py-1 rounded hover:bg-[#1E2026]">
                <List size={14} />
                Indicators
            </button>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
            <button className="p-1 hover:text-white"><Camera size={16} /></button>
            <button className="p-1 hover:text-white"><Settings size={16} /></button>
            <button className="p-1 hover:text-white"><Maximize2 size={16} /></button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 w-full min-h-0 relative bg-[#0b0e11]">
        {/* Overlay Info (Simulated TradingView Overlay) */}
        <div className="absolute top-4 left-4 z-10 flex gap-4 text-xs font-mono">
            <span className="text-white">HYPE/USDC-107 - 1h - Hyperliquid</span>
            <div className="flex gap-2">
                <span className="text-gray-400">O<span className="text-red-400 ml-1">40.846</span></span>
                <span className="text-gray-400">H<span className="text-red-400 ml-1">41.056</span></span>
                <span className="text-gray-400">L<span className="text-red-400 ml-1">40.423</span></span>
                <span className="text-gray-400">C<span className="text-red-400 ml-1">40.803</span></span>
                <span className="text-gray-400">-0.037 (-0.09%)</span>
            </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 40, right: 60, left: 10, bottom: 20 }}>
            <CartesianGrid stroke="#1E2026" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="time" hide />
            <YAxis 
                orientation="right" 
                domain={['auto', 'auto']} 
                tick={{ fill: '#6B7280', fontSize: 11 }} 
                axisLine={false}
                tickLine={false}
                tickFormatter={(val) => val.toFixed(3)}
            />
            {/* Candle Body & Wicks custom shape */}
            <Bar dataKey="high" shape={<CustomShape />} isAnimationActive={false} />
            
            {/* Current Price Line */}
            <ReferenceLine y={data[data.length-1].close} stroke="#ef4444" strokeDasharray="3 3">
            </ReferenceLine>
          </ComposedChart>
        </ResponsiveContainer>
        
        {/* Current Price Label on Y Axis (Simulated) */}
        <div className="absolute right-0 top-[40%] transform -translate-y-1/2 bg-red-500 text-white text-[10px] px-1 py-0.5 font-mono">
            40.803
        </div>
      </div>
    </div>
  );
}
