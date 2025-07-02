'use client'; // This is a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: '📊', label: 'Dashboard' },
    { href: '/portfolio', icon: '📈', label: 'Portfolio' },
    { href: '/transactions', icon: '💸', label: 'Transactions' },
    { href: '/watchlist', icon: '⭐', label: 'Watchlist' },
    { href: '/reports', icon: '📄', label: 'Reports' },
  ];

  return (
    <aside className="w-64 bg-gray-800 dark:bg-gray-900 text-white p-4 hidden md:flex flex-col shadow-lg">
      <div className="text-2xl font-bold mb-8 text-blue-400">MyBank</div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  pathname === item.href
                    ? 'bg-blue-700 text-white'
                    : 'hover:bg-gray-700 text-gray-300'
                }`}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-8 border-t border-gray-700">
        <Link href="/settings" className="flex items-center p-3 rounded-lg hover:bg-gray-700 text-gray-300 transition-colors duration-200">
          <span className="mr-3 text-xl">⚙️</span>
          Settings
        </Link>
        <button className="flex items-center p-3 rounded-lg hover:bg-gray-700 text-gray-300 transition-colors duration-200 w-full text-left mt-2">
          <span className="mr-3 text-xl">🚪</span>
          Logout
        </button>
      </div>
    </aside>
  );
}