import { http, HttpResponse } from 'msw';
import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-deatils';

export const getOrdersDetailstMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1231231321',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 50000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 10000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 20000,
        product: { name: 'Pizza Marguerita' },
        quantity: 2,
      },
    ],
  });
});
