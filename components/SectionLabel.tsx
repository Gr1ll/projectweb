type SectionLabelProps = {
  children: React.ReactNode;
};

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <h2 className="flex items-center gap-3 font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
      {children}
      <span className={"inline-block h-2.5 w-2.5 rounded-full"} />
    </h2>
  );
}
