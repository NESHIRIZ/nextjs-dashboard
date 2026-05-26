import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-gray-50 p-8 shadow-lg">
        <h1 className={`${lusitana.className} mb-4 text-2xl font-semibold`}>Create an account</h1>
        <p className="text-sm text-gray-600">
          This demo app does not currently support real account creation, but you can sign in with the sample login flow.
        </p>
        <div className="mt-8 space-y-4">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-gray-700">Sample login</p>
            <p className="mt-2 text-sm text-gray-500">
              Use <strong>user@nextmail.com</strong> and password <strong>123456</strong> to sign in.
            </p>
          </div>
          <Link href="/login">
            <Button className="w-full">Go to sign in</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
