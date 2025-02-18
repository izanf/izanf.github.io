import Section from "../Section";

import { formatDate } from "@/utils";

import { experience } from "@/data";
import { ExperienceType } from "./types";

export default function Experience() {
  const renderExperience = ({ position, company, startDate, endDate, description, activities }: ExperienceType) => (
    <li className="pb-6 not-first:pt-6 not-last:border-b-1 border-gray-300">
      <h3>{position} <span className="text-gray-600 font-normal text-sm">({formatDate(startDate)} - {formatDate(endDate)})</span></h3>
      <h4 className="text-gray-600">{company}</h4>
      <p className="py-2">{description}</p>
      <p className="font-semibold">Activities</p>
      <ul className="list-decimal ml-6">
        {activities.map((activity, index) => (
          <li key={`activity-${index}`}><p>{activity}</p></li>
        ))}
      </ul>
      <p></p>
    </li>
  )

  return (
    <Section id="experience">
      <h2 className="pb-2">Experience</h2>
      <ul>
        {experience.map(renderExperience)}
      </ul>
    </Section>
  );
}