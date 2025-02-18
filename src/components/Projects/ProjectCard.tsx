import Image from "next/image";

interface ProjectCardProps {
  image: string;
  name: string;
  wide?: boolean;
  tall?: boolean;
}

export default function ProjectCard({ image, name, wide, tall }: ProjectCardProps) {
  const classes = `rounded-lg overflow-hidden${tall ? ' md:row-span-2' : ''} ${wide ? ' md:col-span-2' : ''}`;

  return (
    <li className={classes}>
      <Image src={image} alt={name} width={400} height={400} className="w-full h-full object-cover" />
      <div className="bg-g">
        
      </div>
    </li>
  )
}
