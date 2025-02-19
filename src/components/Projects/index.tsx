import Section from "../Section";

import type { ProjectType } from './types';

import { projects } from '@/data';

import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="pb-6 text-gray-900">Projects</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] grid-rows-[220px] gap-2">
        {(projects as ProjectType[]).map((project, index) => <ProjectCard key={`project-${index}`} {...project} wide={index === 5} tall={index === 1} />)}
      </ul>
    </Section>
  );
}
