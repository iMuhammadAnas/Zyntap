const GridBG = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.1),transparent_40%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20 dark:opacity-10" />
  </div>
);

export default GridBG;
