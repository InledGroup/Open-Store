import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ url }) => {
  const baseUrl = url.origin;

  const apiDocs = {
    name: 'App Store API',
    version: '1.0.0',
    description: 'API para acceder a la información de aplicaciones',
    baseUrl: `${baseUrl}/api`,
    endpoints: [
      {
        path: '/api/apps.json',
        method: 'GET',
        description: 'Obtener todas las aplicaciones',
        example: `${baseUrl}/api/apps.json`
      },
      {
        path: '/api/apps/[id].json',
        method: 'GET',
        description: 'Obtener una aplicación por ID',
        parameters: {
          id: 'ID único de la aplicación'
        },
        example: `${baseUrl}/api/apps/photo-editor-pro.json`
      },
      {
        path: '/api/stats.json',
        method: 'GET',
        description: 'Obtener estadísticas generales',
        example: `${baseUrl}/api/stats.json`
      },
      {
        path: '/api/platforms/[platform].json',
        method: 'GET',
        description: 'Filtrar aplicaciones por plataforma',
        parameters: {
          platform: 'Windows | macOS | Linux | Web | Android | iOS | Chrome | Firefox | Safari | Edge'
        },
        example: `${baseUrl}/api/platforms/Windows.json`
      }
    ],
    dataModel: {
      App: {
        id: 'string (unique identifier)',
        title: 'string',
        icon: 'string (path to icon)',
        platform: 'Platform[] (array of platforms)',
        shortDescription: 'string',
        description: 'string (markdown format)',
        screenshots: 'string[] (array of screenshot paths)',
        video: 'string | undefined (optional video URL)',
        downloads: {
          github: 'string | undefined (GitHub releases URL)',
          sourceforge: 'string | undefined (SourceForge URL)',
          sourceCode: 'string (source code repository URL)'
        }
      },
      Platform: 'Windows | macOS | Linux | Web | Android | iOS | Chrome | Firefox | Safari | Edge'
    },
    usage: {
      javascript: `
// Obtener todas las apps
fetch('${baseUrl}/api/apps.json')
  .then(res => res.json())
  .then(data => console.log(data));

// Obtener app específica
fetch('${baseUrl}/api/apps/photo-editor-pro.json')
  .then(res => res.json())
  .then(data => console.log(data));

// Filtrar por plataforma
fetch('${baseUrl}/api/platforms/Windows.json')
  .then(res => res.json())
  .then(data => console.log(data));
      `.trim(),
      curl: `
# Obtener todas las apps
curl ${baseUrl}/api/apps.json

# Obtener app específica
curl ${baseUrl}/api/apps/photo-editor-pro.json

# Estadísticas
curl ${baseUrl}/api/stats.json
      `.trim()
    },
    cors: 'Enabled',
    cacheControl: 'public, max-age=3600 (1 hour)'
  };

  return new Response(JSON.stringify(apiDocs, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
