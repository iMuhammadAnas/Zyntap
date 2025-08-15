const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
    {children}
  </h2>
);

export default Title;
