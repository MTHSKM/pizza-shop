import { api } from '@/lib/axios';

export interface RegisterRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: number;
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone });
}
