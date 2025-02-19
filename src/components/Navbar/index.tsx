import Link from 'next/link';

// import { gpgKey } from '@/config';

export default function Navbar() {
  return (
    <nav id="navigation" className="min-w-sm bg-gray-800 py-12 px-8">
      <div className="text-white">
        <h1>Izanderson Florencio</h1>
        <h2 className="font-light">Software Developer</h2>
      </div>
      <ul className="py-12">
        <li><Link href="#about">About</Link></li>
        {/* <li><Link href="#blog">Articles</Link></li> */}
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="/resume.pdf">Resume</Link></li>
      </ul>
      <p className="py-4 text-gray-400"><strong>GPG:</strong> 79DF17D99441B33A</p>
    </nav>
  );
}
