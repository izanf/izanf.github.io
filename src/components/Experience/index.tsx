import Section from "../Section";

import { formatDate } from "@/utils";

import { experience } from "@/data";
import { ExperienceType } from "./types";

export default function Experience() {
  const renderExperience = ({ position, company, startDate, endDate, description, activities }: ExperienceType, xpIndex) => (
    <li className="pb-6">
      <h3>{position}</h3>
      <h4>{company}</h4>
      <p className="py-2">{description}</p>
      <p className="font-semibold">Activities</p>
      <ul className="list-decimal">
        {activities.map((activity, activityIndex) => (
          <li key={xpIndex+activityIndex}><p>{activity}</p></li>
        ))}
      </ul>
      <p>{formatDate(startDate)} - {formatDate(endDate)}</p>
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