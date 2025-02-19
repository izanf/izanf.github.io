import { NoData } from '@/components';

interface SectionProps {
  id: string;
  title: string;
  hasData?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, title, hasData = true, children }: SectionProps) {
  const styles = `pt-8 px-4 lg:px-8${className ? ` ${className}` : ''}`;

  return (
    <section id={id} className={styles}>
      <h2 className="text-gray-900 pb-4">{title}</h2>
      <div className="border-b-1 border-gray-300 text-gray-600 pb-8">
        {hasData ? children : <NoData />}
      </div>
    </section>
  );
}
