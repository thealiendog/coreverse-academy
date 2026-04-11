export default function Button({ children, variant = 'primary', className = '', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer border-0 outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const variants = {
    primary:   'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40',
    outline:   'bg-transparent border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white',
    ghost:     'bg-transparent text-white/70 hover:text-white hover:bg-white/10',
    danger:    'bg-red-600 hover:bg-red-700 text-white',
    success:   'bg-emerald-600 hover:bg-emerald-700 text-white',
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
