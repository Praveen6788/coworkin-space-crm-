

const PrimaryButton ({ children,
  className = "",
  onClick
}) {

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-2xl transition text-white font-medium ${className}`}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;