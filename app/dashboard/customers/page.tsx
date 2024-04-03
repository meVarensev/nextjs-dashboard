import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomersTable  customers={[]}/>
      </Suspense>
    </>
  );
}
