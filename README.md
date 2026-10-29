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

Email: /email  (src: components/views/EmailView.js, data: lib/emailData.js -> replace seedEmails() with your mail API)
Chat:  /chat   (src: components/views/ChatView.js,  data: lib/chatData.js  -> replace seedChats() + send/receive with your realtime backend)
Demo media for chat lives in public/media (demo-video.mp4, voice-sample.wav).
