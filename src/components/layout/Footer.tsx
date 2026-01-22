import React from 'react';
import { Twitter, Disc, Github, MessageCircle } from 'lucide-react';
import footerLogo from 'figma:asset/d460bd1df317eabbd5281ec7c2ce1f7163ad2fbd.png';

export function Footer() {
  const links = {
    Ecosystem: ['Grants', 'DApps', 'Wallets', 'Explorers'],
    Developers: ['Documentation', 'GitHub', 'Whitepaper', 'Audit'],
    Community: ['Discord', 'Twitter', 'Telegram', 'Blog'],
    General: ['About', 'Careers', 'Brand Assets', 'Privacy Policy']
  };

  return (
    <footer className="bg-[#020202] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={footerLogo} alt="Taraxa" className="h-8 object-contain" />
            </div>
            <div className="flex gap-4">
               <SocialIcon icon={Twitter} />
               <SocialIcon icon={Disc} /> 
               <SocialIcon icon={Github} />
               <SocialIcon icon={MessageCircle} />
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold mb-6 text-sm text-white uppercase tracking-wider">{category}</h4>
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-[#12E669] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
           © 2026 MISwap. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full hover:bg-[#12E669] text-gray-400 hover:text-black transition-colors">
      <Icon className="w-4 h-4" />
    </a>
  );
}
