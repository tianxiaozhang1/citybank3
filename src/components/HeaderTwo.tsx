// components/Header.tsx
import Link from 'next/link';
import { Briefcase, Bell, UserCircle, LogOut, PlusCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center space-x-3 text-gray-800 hover:text-indigo-600 transition-colors">
              <Briefcase size={30} className="text-indigo-600" />
              <span className="text-2xl font-semibold">MyBank</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/dashboard/open-account" className="text-sm font-medium text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md hover:bg-indigo-50 transition-colors flex items-center">
              <PlusCircle size={16} className="mr-2" />
              Open Account
            </Link>
            <Link href="/dashboard/notifications" className="text-gray-500 hover:text-indigo-600 p-2 rounded-full hover:bg-indigo-50 transition-colors">
              <Bell size={22} />
            </Link>
            <Link href="/dashboard/profile" className="text-gray-500 hover:text-indigo-600 p-2 rounded-full hover:bg-indigo-50 transition-colors">
              <UserCircle size={24} />
            </Link>
            <button className="text-sm font-medium text-gray-600 hover:text-indigo-600 flex items-center px-3 py-2 rounded-md hover:bg-indigo-50 transition-colors">
              <LogOut size={18} className="mr-1.5"/> Logout
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;