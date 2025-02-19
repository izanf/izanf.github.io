interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  const styles = `px-4 lg:px-8${className ? ` ${className}` : ''}`;

  return (
    <section id={id} className={styles}>
      <div className="border-b-1 border-gray-300 py-12 text-gray-600">
        {children}
      </div>
    </section>
  );
}
