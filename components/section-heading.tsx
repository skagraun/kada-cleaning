interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="md:text-3xl text-lg font-semibold text-blue-500 uppercase md:mt-8 mt-8">
      {children}
    </h2>
  );
};

export default SectionHeading;
