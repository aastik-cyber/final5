import { Shield, BookOpen, Wrench, Bot, Trophy } from 'lucide-react';
import { LogOut, User } from 'lucide-react'; // cite: 18 (using lucide-react as seen in project)
import { supabase } from '../lib/supabase';
import { LogOut } from 'lucide-react'; //
import { supabase } from '../lib/supabase'; //
import { LogOut, Layout, Shield, BookOpen, BarChart3, MessageSquare } from 'lucide-react'; //
import { supabase } from '../lib/supabase'; //

// ... inside your Navigation component ...
<div className="flex flex-col h-full">
  {/* Existing Nav Links */}
  
  <div className="mt-auto pb-4 px-4">
    <button
      onClick={() => supabase.auth.signOut()}
      className="flex items-center w-full gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
    >
      <LogOut size={20} />
      <span className="font-medium">Sign Out</span>
    </button>
  </div>
</div>
// Inside your Navigation component return, add this button:
<button
  onClick={() => supabase.auth.signOut()}
  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
>
  <LogOut className="h-5 w-5" />
  <span>Logout</span>
</button>

// Add this function inside your Navigation component
const handleLogout = async () => {
  await supabase.auth.signOut();
};

// Add this to your JSX (e.g., at the end of the nav items)
<button 
  onClick={handleLogout}
  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
>
  <LogOut size={20} />
  <span>Logout</span>
</button>

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'labs', label: 'Vulnerability Labs', icon: Shield },
    { id: 'tools', label: 'Security Tools', icon: Wrench },
    { id: 'learn', label: 'Learning Path', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: Trophy },
    { id: 'assistant', label: 'AI Assistant', icon: Bot },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-emerald-400" />
            <span className="text-xl font-bold">CyberSec Academy</span>
          </div>
          <div className="flex space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-emerald-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}



