// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// // import '../styles/globals.css';
// import '../../../app/globals.css'
// import Navbar from '../../../components/Layout/Navbar';
// import Sidebar from '../../../components/Layout/Sidebar';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'My Investment Dashboard',
//   description: 'A realistic banking investment dashboard',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
//         <div className="flex min-h-screen">
//           <Sidebar />
//           <div className="flex-1 flex flex-col">
//             <Navbar />
//             <main className="flex-1 p-6 md:p-8 overflow-auto">
//               {children}
//             </main>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }