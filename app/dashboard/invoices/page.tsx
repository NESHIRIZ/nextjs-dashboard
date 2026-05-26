import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className={`${lusitana.className} text-2xl font-semibold`}>Invoices</h1>
          <p className="text-sm text-gray-500">
            Browse your invoices and manage statuses for recent customers.
          </p>
        </div>
        <CreateInvoice />
      </div>

      <div className="mt-6">
        <Search placeholder="Search invoices..." />
      </div>

      <div className="mt-6">
        <Table query="" currentPage={1} />
      </div>
    </div>
  );
}
