const Section = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  return (
    <section id={id} className={`section-full ${className ?? ""}`}>
      {children}
    </section>
  );
};

export default Section;
