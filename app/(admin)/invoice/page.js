import InvoiceListView from '@/components/views/InvoiceListView';
import { getInvoices } from '@/lib/invoices';

export const metadata = { title: 'Invoices - NusaCore' };

export default function Page() {
  return <InvoiceListView invoices={getInvoices()} />;
}
