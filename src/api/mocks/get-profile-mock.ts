import { http, HttpResponse } from 'msw';
import { GetProfileResponse } from '../get-profile';

export const getProfiletMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '432143214',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    });
  }
);
