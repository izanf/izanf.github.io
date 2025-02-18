import Link from 'next/link';
import Section from '../Section';

export default function About() {
  return (
    <Section id="about" className="bg-gray-100">
      <h2 className="pb-2">About</h2>
      <p>
        Hi, I'm Izanderson Florencio, a software developer with a passion for front-end development. Currently working as software developer at <Link href="http://www.keepsporting.com" target="_blank">Keepsporting</Link>.
      </p>
    </Section>
  );
}