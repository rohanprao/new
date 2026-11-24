const partners = [
  { name: 'Global Industrial', icon: '🏭' },
  { name: 'TechManufacture', icon: '⚙️' },
  { name: 'PureSystems', icon: '🔬' },
  { name: 'EnergyCorp', icon: '⚡' },
  { name: 'SafeBuild', icon: '🏗️' },
  { name: 'WorldLogistics', icon: '🌐' },
];

export default function TrustedBy() {
  return (
    <section className="bg-[#080810] border-y border-purple-900/30 py-10 overflow-hidden">
      <div className="text-center mb-6">
        <span className="label-overline">Trusted by Industry Leaders</span>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex gap-16 w-max"
          style={{
            animation: 'marquee 20s linear infinite',
          }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-slate-400 hover:text-purple-500 transition-colors duration-300 cursor-default group flex-shrink-0"
            >
              <span
                className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-300"
                role="img"
                aria-label={partner.name}
              >
                {partner.icon}
              </span>
              <span className="text-base font-semibold tracking-wide whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
