import Link from 'next/link';

// import { gpgKey } from '@/config';

export default function Navbar() {
  return (
    <nav id="navigation" className="min-w-xs bg-gray-800 py-12 px-8">
      <ul className="">
        <li><Link href="#about">About</Link></li>
        <li><Link href="#blog">Blog</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="/curriculo">Curriculo</Link></li>
      </ul>
      <p className="py-4 text-gray-400"><strong>GPG:</strong> 79DF17D99441B33A</p>
    </nav>
  );
}
