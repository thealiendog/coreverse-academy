import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCurrentParent } from '../lib/storage';
import ParentNav, { MobileNav } from '../components/ParentNav';

export default function ParentLayout() {
  const navigate = useNavigate();
  const parent = getCurrentParent();

  useEffect(() => {
    if (!parent) navigate('/parent/login');
  }, [parent, navigate]);

  if (!parent) return null;

  return (
    <div className="min-h-screen bg-[#080618] flex overflow-hidden">
      <ParentNav />

      {/* Main content */}
      <main className="flex-1 lg:pl-56">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 pb-24 lg:pb-8">
          <Outlet />
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
