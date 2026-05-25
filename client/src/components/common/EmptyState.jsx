function EmptyState({
  title,
  description
}) {

  return (
    <div className="bg-white/5 border border-white/10 rounded-[32px] p-12 text-center backdrop-blur-xl">

      <div className="text-5xl mb-5">
        📭
      </div>

      <h2 className="text-2xl font-semibold text-white mb-3">
        {title}
      </h2>

      <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
        {description}
      </p>

    </div>
  );
}

export default EmptyState;