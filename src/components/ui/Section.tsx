const Section = ({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`relative scroll-mt-24 py-20 ${className}`}>
    {children}
  </section>
);

export default Section;
