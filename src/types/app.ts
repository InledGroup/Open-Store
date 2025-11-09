export type Platform = 'Windows' | 'macOS' | 'Linux' | 'Web' | 'Android' | 'iOS' | 'Chrome' | 'Firefox' | 'Safari' | 'Edge';

export interface DownloadLink {
  github?: string;
  sourceforge?: string;
  sourceCode: string;
}

export interface App {
  id: string;
  title: string;
  icon: string;
  platform: Platform[];
  shortDescription: string;
  description: string; // Markdown
  screenshots: string[];
  video?: string;
  downloads: DownloadLink;
}
