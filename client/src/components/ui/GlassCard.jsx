function GlassCard({
  children,
  className = ""
}) {

  return (

    <div
      className={`bg-[#0F172A]/80 border border-white/5 backdrop-blur-xl rounded-2xl ${className}`}
    >

      {children}

    </div>

  );
}

export default GlassCard;