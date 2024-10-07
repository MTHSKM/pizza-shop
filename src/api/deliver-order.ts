import { api } from '@/lib/axios';

export interface DelieverOrderParams {
  orderId: string;
}

export async function deliverOrder({ orderId }: DelieverOrderParams) {
  await api.patch(`/orders/${orderId}/deliver`);
}
