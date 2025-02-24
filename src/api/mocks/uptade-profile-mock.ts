import { http, HttpResponse } from 'msw';
import { UpdateProfileProps } from '../update-profile';

export const uptadeProfileMock = http.put<never, UpdateProfileProps>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json();

    if (name === 'Rocket Pizza') {
      return new HttpResponse(null, { status: 204 });
    }

    return new HttpResponse(null, { status: 400 });
  }
);
