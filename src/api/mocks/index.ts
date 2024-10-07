import { env } from '@/env';
import { setupWorker } from 'msw/browser';
import { signInMock } from './sign-in-mock';
import { registerRestaurantMock } from './register-restaurant-mock';
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock';
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock';
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock';
import { getMonthRevenuetMock } from './get-month-revenue-mock';
import { getDailyRevenueInPeriodtMock } from './get-daily-revenue-in-period-mock';
import { getPopularProductstMock } from './get-popular-products-mock';
import { getProfiletMock } from './get-profile-mock';
import { uptadeProfileMock } from './uptade-profile-mock';
import { getManagedRestauranttMock } from './get-managed-restaurant-mock';
import { getOrdersMock } from './get-orders-mock';
import { getOrdersDetailstMock } from './get-orders-details-mock';
import { approveOrderMock } from './approve-order-mock';
import { cancelOrderMock } from './cancel-order-mock';
import { deliverOrderMock } from './deliver-order-mock';
import { dispatchOrderMock } from './dispatch-order-mock';

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getMonthRevenuetMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getPopularProductstMock,
  getDailyRevenueInPeriodtMock,
  getMonthOrdersAmountMock,
  getProfiletMock,
  uptadeProfileMock,
  getManagedRestauranttMock,
  getOrdersMock,
  getOrdersDetailstMock,
  approveOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
  cancelOrderMock
);

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return;
  }

  await worker.start();
}
