import Link from 'next/link'

export default function Navbar() {
  return (
    <nav id="navigation" className="min-w-xs bg-gray-800 text-white">
      <ul className="py-12 px-8">
        <li><Link href="#about">About</Link></li>
        <li><Link href="#blog">Blog</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#experience">Experience</Link></li>
      </ul>
    </nav>
  )
}
