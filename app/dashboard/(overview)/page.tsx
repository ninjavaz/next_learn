import { lusitana } from '@/app/ui/fonts';
// import { fetchLatestInvoices } from '@/app/lib/data';
import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import CardWrapper, { Card } from '../../ui/dashboard/cards';
import { Suspense } from 'react';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // let totalPaidInvoices = await fetchTotalPaidInvoices();
  return (
    <main>
      <h1 className={`${lusitana.className} md: mb-4 text-2xl text-xl`}>
        Dashboard
      </h1>
      <div className="lg: grid grid-cols-4 gap-6 sm:grid-cols-2">
        <Suspense fallback={<CardsSkeleton/>}>

        <CardWrapper></CardWrapper>

        </Suspense>
        
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue} /> */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
