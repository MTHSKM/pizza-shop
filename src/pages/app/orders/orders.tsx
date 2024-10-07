import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Helmet } from 'react-helmet-async';
import { OrderTableRow } from './order-table-row';
import { OrderTableFilters } from './order-table-filters';
import { Pagination } from '@/components/pagination';
import { useQuery } from '@tanstack/react-query';
import { getOrders } from '@/api/get-orders';
import { useSearchParams } from 'react-router-dom';
import { z } from 'zod';
import { OrderTableSkeleton } from './order-table-skeleton';

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get('orderId');
  const customerName = searchParams.get('customerName');
  const status = searchParams.get('status');

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1');

  const { data: result, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['orders', pageIndex, orderId, customerName, status],
    queryFn: () => getOrders({ pageIndex, orderId, customerName, status }),
  });

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString());

      return state;
    });
  }

  return (
    <>
      <Helmet title="Pedidos"></Helmet>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters></OrderTableFilters>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do Pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {isLoadingOrders && <OrderTableSkeleton></OrderTableSkeleton>}

                {result &&
                  result.orders.map((order) => {
                    return (
                      <OrderTableRow
                        key={order.orderId}
                        order={order}
                      ></OrderTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>

          {result && (
            <Pagination
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
              onPageChange={handlePaginate}
            ></Pagination>
          )}
        </div>
      </div>
    </>
  );
}
