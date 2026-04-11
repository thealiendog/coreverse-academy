import { NavLink, useNavigate } from 'react-router-dom';
import { clearCurrentParent } from '../lib/storage';
import Logo from './Logo';

const NAV_ITEMS = [
  { to: '/parent/dashboard', label: 'Home',       icon: HomeIcon },
  { to: '/parent/children',  label: 'My Children', icon: ChildIcon },
  { to: '/parent/subjects',  label: 'Subjects',   icon: SubjectIcon },
  { to: '/parent/compliance',label: 'Compliance', icon: ShieldIcon },
  { to: '/parent/account',   label: 'Account',    icon: AccountIcon },
];

export default function ParentNav() {
  const navigate = useNavigate();

  function logout() {
    clearCurrentParent();
    navigate('/');
  }

  return (
    <aside className="fixed inset-y-0 left-0 w-56 bg-[#080618] border-r border-white/4 flex flex-col z-50 max-lg:hidden">
      {/* Logo */}
      <div className="px-5 py-5">
        <Logo size="sm" />
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-2 flex flex-col gap-0.5">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-all duration-150
              ${isActive
                ? 'text-white bg-white/6'
                : 'text-white/35 hover:text-white/70 hover:bg-white/3'}`
            }
          >
            {({ isActive }) => (
              <>
                <span className={`transition-opacity duration-150 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                  <Icon />
                </span>
                <span className={`font-normal ${isActive ? 'font-medium' : ''}`}>{label}</span>
                {isActive && (
                  <span className="ml-auto w-1 h-1 rounded-full bg-[#7C3AED]"/>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4">
        <button
          onClick={logout}
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-white/20 hover:text-white/45 transition-all duration-150 w-full group"
        >
          <LogoutIcon />
          Sign out
        </button>
      </div>
    </aside>
  );
}

// Mobile bottom nav
export function MobileNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-[#080618]/95 backdrop-blur border-t border-white/4 flex lg:hidden z-50">
      {NAV_ITEMS.slice(0, 4).map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center gap-1 py-3 text-[11px] transition-colors duration-150
            ${isActive ? 'text-white' : 'text-white/25 hover:text-white/50'}`
          }
        >
          {({ isActive }) => (
            <>
              <span className={isActive ? 'opacity-100' : 'opacity-40'}><Icon /></span>
              <span className={isActive ? 'font-medium' : 'font-normal'}>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

// ── Icons (thinner stroke, 16px) ──────────────────────────────────────────────
function HomeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  );
}
function ChildIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  );
}
function SubjectIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function AccountIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  );
}
function LogoutIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  );
}
