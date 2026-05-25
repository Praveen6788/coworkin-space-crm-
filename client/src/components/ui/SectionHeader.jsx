function SectionHeader({
  badge,
  title,
  description
}) {

  return (

    <div className="mb-16">

      <p className="text-sky-500 text-sm tracking-[0.25em] uppercase mb-5">

        {badge}

      </p>

      <h2 className="text-[48px] leading-tight font-semibold mb-6">

        {title}

      </h2>

      <p className="text-slate-500 text-[17px] leading-relaxed max-w-2xl">

        {description}

      </p>

    </div>

  );
}

export default SectionHeader;