import type { APIRoute } from 'astro';
import { apps } from '../../data/apps';
import type { Platform } from '../../types/app';

export const GET: APIRoute = () => {
  // Calculate statistics
  const totalApps = apps.length;

  // Count apps by platform
  const platformCount: Record<string, number> = {};
  apps.forEach(app => {
    app.platform.forEach((platform: Platform) => {
      platformCount[platform] = (platformCount[platform] || 0) + 1;
    });
  });

  // Apps with video
  const appsWithVideo = apps.filter(app => app.video).length;

  // Apps with GitHub download
  const appsWithGithub = apps.filter(app => app.downloads.github).length;

  // Apps with SourceForge download
  const appsWithSourceforge = apps.filter(app => app.downloads.sourceforge).length;

  // Average screenshots per app
  const totalScreenshots = apps.reduce((sum, app) => sum + app.screenshots.length, 0);
  const avgScreenshots = (totalScreenshots / totalApps).toFixed(2);

  const stats = {
    totalApps,
    platformCount,
    appsWithVideo,
    appsWithGithub,
    appsWithSourceforge,
    totalScreenshots,
    avgScreenshots: parseFloat(avgScreenshots),
    platforms: Object.keys(platformCount).length
  };

  return new Response(JSON.stringify(stats, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
