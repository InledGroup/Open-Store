import type { APIRoute } from 'astro';
import { apps } from '../../data/apps';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(apps, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
