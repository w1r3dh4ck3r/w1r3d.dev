export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[];
  content?: string;
}
