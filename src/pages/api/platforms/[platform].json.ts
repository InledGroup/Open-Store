import type { APIRoute } from 'astro';
import { apps } from '../../../data/apps';
import type { Platform } from '../../../types/app';

const validPlatforms: Platform[] = [
  'Windows', 'macOS', 'Linux', 'Web', 'Android', 'iOS',
  'Chrome', 'Firefox', 'Safari', 'Edge'
];

export const GET: APIRoute = ({ params }) => {
  const { platform } = params;

  if (!platform || !validPlatforms.includes(platform as Platform)) {
    return new Response(
      JSON.stringify({
        error: 'Invalid platform',
        validPlatforms
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  const filteredApps = apps.filter(app =>
    app.platform.includes(platform as Platform)
  );

  return new Response(
    JSON.stringify({
      platform,
      count: filteredApps.length,
      apps: filteredApps
    }, null, 2),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    }
  );
};

export function getStaticPaths() {
  return validPlatforms.map((platform) => ({
    params: { platform }
  }));
}
