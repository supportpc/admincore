# NusaCore Admin - Next.js (App Router)

    npm install
    npm run dev        # http://localhost:3000  (redirects to /dashboard)
    npm run build && npm start

- `app/(admin)/*`   every page that uses the sidebar/topbar shell (shared layout)
- `app/login`       standalone login (no shell)
- `components/`     AdminProvider (theme, layout, toast, modals, users), AdminShell, DataGrid, invoice, wrappers for Dropzone/Quill/Cleave/DataTables/Flatpickr
- `components/views/*View.js`   one file per page
- `lib/`            nav, dummy data (tableData, invoices, products ...). Swap these for your API.
- `app/globals.css` all CSS from style.css + page styles

Invoices:  /invoice (list)  and  /invoice/[id]  -> data from lib/invoices.js (getInvoices / getInvoiceById)
Data table: /data-table -> reusable <DataGrid/> in components/DataGrid.js
