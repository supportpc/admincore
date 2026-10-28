import { notFound } from 'next/navigation';
import InvoiceView from '@/components/views/InvoiceView';
import { getInvoiceById, getInvoices } from '@/lib/invoices';

export function generateStaticParams() {
  return getInvoices().map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  return { title: `Invoice ${id} - NusaCore` };
}

// Dynamic invoice: /invoice/INV-2026-001 -> data comes from getInvoiceById() (replace with your API)
export default async function Page({ params }) {
  const { id } = await params;
  const invoice = getInvoiceById(id);
  if (!invoice) notFound();
  return <InvoiceView invoice={invoice} />;
}
