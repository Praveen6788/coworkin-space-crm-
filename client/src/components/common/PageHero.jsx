function PageHero({
  badge,
  title,
  description
}) {

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-8 sm:p-10 lg:p-14 mb-10">

      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>


      <div className="relative z-10 max-w-4xl">

        <p className="text-blue-400 text-sm mb-4 tracking-widest uppercase">
          {badge}
        </p>


        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
          {title}
        </h1>


        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
          {description}
        </p>

      </div>

    </div>
  );
}

export default PageHero;