export const seoSitemap: ISitemapTag[] = [{
  customUrl: '/',
  title: 'Elias Murcray - Professional Web Design',
  description: 'Discover the world of Elias Murcray, professional web developer. Explore my coding blog, browse my project portfolio, and get in touch with me via my contact information! Make your dream website a reality.'
},
{
  customUrl: '/contact',
  title: 'Contact - Elias Murcray',
  description: 'Get in touch with me about a project. All quotes are free of charge!'
},
{
  customUrl: '/about',
  title: 'About - Elias Murcray',
  description: 'Learn more about me, my goals, and my other interests!'
},
{
  customUrl: '/projects',
  title: 'Projects - Elias Murcray',
  description: 'View my professional projects as well as a few hobby projects I have made.'
}
];

export interface ISitemapTag {
  customUrl: string;
  title: string | null;
  description: string | null;
}
