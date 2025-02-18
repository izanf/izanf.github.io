interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  const styles = `py-12 px-8${className ? ` ${className}` : ''}`;

  return <section id={id} className={styles}>{children}</section>;
}
