import React, {ReactNode, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
  classnames,
  padding,
  typography,
  borders,
  backgrounds,
  display,
  TTailwindString
} from 'tailwindcss-classnames';

export default function Topnav () {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setShowNav(!showNav)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1>
                <Link to="/" className="text-white hover:text-gray-300 no-underline">
                  Hebrew Novels
                </Link>
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavItem href="/novels">Novels</NavItem>
                <NavItem href="/readings">Readings</NavItem>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Mobile menu, show/hide based on menu state */}
      {showNav && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavItem href="/novels" mobile>Novels</NavItem>
            <NavItem href="/readings" mobile>Readings</NavItem>
          </div>
        </div>
      )}
    </nav>
  );
}

interface NavItemProps {
  href: string;
  children: ReactNode;
  className?: TTailwindString;
  mobile?: boolean;
}

function NavItem ({href, className, children, mobile}: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(href);

  const base = classnames(
    padding('px-3', 'py-2'),
    typography(
      'font-medium', 'no-underline', (mobile ? 'text-base' : 'text-sm')
    ),
    borders('rounded-md'),
    display({block: mobile})
  );

  const active = classnames(
    base, typography('text-white'), backgrounds('bg-gray-900'),

  );
  const inActive = classnames(
    base, typography('text-gray-300', 'hover:text-white'),
    backgrounds('hover:bg-gray-700')
  );

  return (
    <Link to={href} className={isActive ? active : inActive}>{children}</Link>
  );
}
