import { http, HttpResponse } from 'msw';
import { GetManagedRestaurantResponse } from '../get-managed-restaurant';

export const getManagedRestauranttMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  });
});
