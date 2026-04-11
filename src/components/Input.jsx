export default function Input({ label, error, className = '', ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-white/70">{label}</label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30
          focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/30
          transition-all duration-200 ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
}
