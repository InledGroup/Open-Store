import type { APIRoute } from 'astro';
import { apps } from '../../../data/apps';

export const GET: APIRoute = ({ params }) => {
  const { id } = params;

  const app = apps.find(app => app.id === id);

  if (!app) {
    return new Response(JSON.stringify({ error: 'App not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return new Response(JSON.stringify(app, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

export function getStaticPaths() {
  return apps.map((app) => ({
    params: { id: app.id }
  }));
}
