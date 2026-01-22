import React, { useState } from 'react';
import { 
  Crosshair, 
  MousePointer2, 
  TrendingUp, 
  LayoutGrid, 
  Type, 
  Move, 
  Magnet, 
  Lock, 
  Trash2,
  MoreHorizontal,
  Pencil
} from 'lucide-react';

export function SidebarTools() {
  const [activeTool, setActiveTool] = useState('crosshair');

  const tools = [
    { id: 'crosshair', icon: Crosshair },
    { id: 'cursor', icon: MousePointer2 },
    { id: 'trend', icon: TrendingUp },
    { id: 'fib', icon: LayoutGrid },
    { id: 'brush', icon: Pencil },
    { id: 'text', icon: Type },
    { id: 'move', icon: Move },
  ];

  return (
    <div className="flex flex-col items-center py-2 gap-4 h-full bg-[#0b0e11]">
      <div className="flex flex-col gap-3 w-full items-center">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`p-1.5 rounded transition-colors ${
              activeTool === tool.id 
                ? 'text-teal-400 bg-[#1E2026]' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-[#1E2026]'
            }`}
          >
            <tool.icon size={18} strokeWidth={1.5} />
          </button>
        ))}
      </div>
      
      <div className="mt-auto flex flex-col gap-3 w-full items-center pb-2">
        <button className="p-1.5 text-gray-500 hover:text-gray-300 hover:bg-[#1E2026] rounded">
          <Magnet size={18} strokeWidth={1.5} />
        </button>
        <button className="p-1.5 text-gray-500 hover:text-gray-300 hover:bg-[#1E2026] rounded">
          <Lock size={18} strokeWidth={1.5} />
        </button>
        <button className="p-1.5 text-gray-500 hover:text-gray-300 hover:bg-[#1E2026] rounded">
          <Trash2 size={18} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
