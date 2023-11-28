// Navbar

import React from 'react';

const Navbar = () => (
  <nav className="bg-teal-500 shadow-md sticky top-0">
    <div className="section-container !my-0 flex flex-wrap items-center justify-between py-4">
      <div className="font-semibold text-xl tracking-tight text-white">Pixelated Frankie Skeleton</div>
      <div className="w-auto">
        <ul className="list-none flex gap-8">
          <li>
            <a href="#" className="">Link 1</a>
          </li>
          <li>
            <a href="#" className="">Link 1</a>
          </li>
          <li>
            <a href="#" className="">Link 1</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;