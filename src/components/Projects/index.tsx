import Section from "../Section";

import { projects } from '@/data';

import ProjectCard from './ProjectCard';

type ProjectType = {
  name: string;
  description: string;
  image: string;
  url: string;
}

export default function Projects() {
  return (
    <Section id="projects" className="bg-gray-100">
      <h2 className="pb-6">Projects</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] grid-rows-[240px] gap-2">
        {(projects as ProjectType[]).map((project, index) => <ProjectCard key={`project-${index}`} {...project} wide={index === 5} tall={index === 1} />)}
      </ul>
    </Section>
  );
}
