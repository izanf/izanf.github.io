import { useState } from 'react';
import Link from 'next/link';

// import { gpgKey } from '@/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (<button onClick={() => setIsOpen(true)} className="md:hidden absolute right-4 top-4">Menu</button>)}
      <div
        id="navigation-overlay"
        onClick={() => setIsOpen(false)}
        className={`absolute w-full h-full bg-black/25 z-1 ${isOpen ? 'block' : 'hidden'}`}
      />
      <nav id="navigation" className={`${isOpen ? 'block' : 'hidden'} z-1 absolute right-0 h-full md:flex md:static`}>
        <div className="min-w-sm bg-gray-800 py-12 px-8 right-0 h-full">
          <div className="text-white">
            <h1 className="text-sm">Izanderson Florencio</h1>
            <h2 className="font-light">Software Developer</h2>
          </div>
          <ul className="py-12 [&>li>a]:p-2 [&>li>a]:block [&>li>a]:hover:bg-black/15 [&>li>a]:rounded-sm [&>li>a]:ml-[-8] [&>li>a]:mr-[-8]">
            <li><Link href="#about">About</Link></li>
            {/* <li><Link href="#blog">Articles</Link></li> */}
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="/resume.pdf">Resume</Link></li>
          </ul>
          <p className="py-4 text-gray-400"><strong>GPG:</strong> 79DF17D99441B33A</p>
        </div>
      </nav>
    </>
  );
}
