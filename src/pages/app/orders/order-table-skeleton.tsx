import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { TableCell, TableRow } from '@/components/ui/table';
import { Search } from 'lucide-react';

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button disabled variant="outline" size="xs">
            <Search className="h-3 w-3"></Search>
            <span className="sr-only">Detalhes do Pedido</span>
          </Button>
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[172px]"></Skeleton>
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[148px]"></Skeleton>
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[110px]"></Skeleton>
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[200px]"></Skeleton>
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[64px]"></Skeleton>
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[92px]"></Skeleton>
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-[92px]"></Skeleton>
        </TableCell>
      </TableRow>
    );
  });
}
