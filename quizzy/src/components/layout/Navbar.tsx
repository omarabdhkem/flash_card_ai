import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-display">Quizzy</h1>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary" href="#">الرئيسية</a>
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary" href="#">المجموعات</a>
              <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary" href="#">الأسعار</a>
            </nav>
            <button className="px-4 py-2 text-sm font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-700">تسجيل الدخول</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
