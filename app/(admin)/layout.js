import AdminProvider from '@/components/AdminProvider';
import AdminShell from '@/components/AdminShell';

// Every page inside (admin) gets the sidebar, topbar, modals, toast and command palette.
// Standalone pages (e.g. /login) should live outside this route group.
export default function AdminLayout({ children }) {
  return (
    <AdminProvider>
      <AdminShell>{children}</AdminShell>
    </AdminProvider>
  );
}
