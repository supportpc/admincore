// third-party CSS first, so the theme overrides in globals.css win (same order as the original <link> tags)
import 'dropzone/dist/min/dropzone.min.css';
import 'quill/dist/quill.snow.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import './globals.css';

export const metadata = {
  title: 'NusaCore',
  description: 'NusaCore - Complete Panel Kit',
};

// Applies the saved theme before first paint to avoid a light-mode flash.
const themeScript = `
try {
  if (localStorage.getItem('admincore-theme') === 'dark') document.body.classList.add('dark-mode');
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
      </head>
      {/* body classes (dark-mode, top-nav) are toggled imperatively, so skip hydration diff */}
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
