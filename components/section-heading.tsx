interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="md:text-3xl text-lg font-semibold text-blue-500 uppercase">
      {children}
    </h2>
  );
};

export default SectionHeading;
