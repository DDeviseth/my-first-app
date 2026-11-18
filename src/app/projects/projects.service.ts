import { Injectable } from '@angular/core';
import { Project } from '../project';

// A service holds data and logic that components should not own.
// Components receive it through dependency injection: inject(ProjectsService).
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      id: 1,
      name: 'CEERIES Hydra Slay Lip Oil Website',
      year: 2026,
      category: 'Web',
      summary: "A responsive digital marketing website for CEERIES's Hydra Slay Lip Oil line.",
      details:
        'Features interactive product browsing, cart functionality, social campaigns, and product and customer data displayed from an API. Hosted on Vercel with the code on GitHub.',
      url: 'https://sites-ceeries-8law1wiun-deviseth.vercel.app',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Responsive Web Design',
        'UI/UX Design',
        'REST API Integration',
        'Frontend Development',
        'GitHub',
        'Vercel'
      ]
    },
    {
      id: 2,
      name: 'RestoRadar',
      year: 2026,
      category: 'Full-Stack',
      summary: 'A restaurant database web application.',
      details:
        'Search and filter restaurants, view inspection records, and manage restaurant listings. React front end with a Node.js and Express REST API backed by MongoDB Atlas, deployed on Vercel.',
      url: 'https://restoradar-1ibm6fsmm-deviseth.vercel.app',
      skills: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Node.js',
        'Express.js',
        'MongoDB Atlas',
        'REST API Integration',
        'Database Management',
        'Git',
        'Vercel'
      ]
    },
    {
      id: 3,
      name: 'Tagpuan',
      year: 2026,
      category: 'Design',
      summary:
        'A Figma design for a platform to discover hotels and event venues and plan occasions in one place.',
      details:
        'Designed in Figma as a UI/UX prototype. It has not been developed into a working website yet.',
      skills: ['UI/UX Design', 'Figma']
    },
    {
      id: 4,
      name: 'Personal CV Website',
      year: 2026,
      category: 'Web',
      summary: 'This site: a multi-component Angular CV.',
      details:
        'Built from Header, Skills, Projects, Footer and theme toggle components. The root component passes data down with input() and listens for events with output(). A service supplies the projects, and signals drive the filter and dark mode.',
      skills: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Responsive Web Design', 'Frontend Development']
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
