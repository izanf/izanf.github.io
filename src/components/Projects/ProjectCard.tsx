import Image from "next/image";

interface ProjectCardProps {
  image: string;
  name: string;
  year: number;
  wide?: boolean;
  tall?: boolean;
}

export default function ProjectCard({ image, name, year, wide, tall }: ProjectCardProps) {
  const classes = `relative rounded-lg overflow-hidden hover:[&>img]:scale-125 hover:[&>div]:visible${tall ? ' md:row-span-2' : ''} ${wide ? ' md:col-span-2' : ''} `;

  return (
    <li className={classes}>
      <Image src={image} alt={name} width={600} height={600} className="w-full h-full object-cover transition-all" />
      <div className="bg-dark w-full h-full absolute top-0 left-0 bg-black/50 flex flex-col items-center justify-center text-white text-center invisible">
        <h3 className="text-white">{name}</h3>
        <h4 className="text-xs">{year}</h4>
      </div>
    </li>
  )
}
