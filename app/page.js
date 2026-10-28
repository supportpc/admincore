import { redirect } from 'next/navigation';

// index.html -> /dashboard
export default function Home() {
  redirect('/dashboard');
}
