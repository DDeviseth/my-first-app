export interface Project {
  id: number;
  name: string;
  year: number;
  category: 'Web' | 'Full-Stack' | 'Design';
  summary: string;
  details: string;
  // Optional link to the live site (shown when the card is expanded).
  url?: string;
  // Names that match the Key Skills list can be filtered by clicking that skill.
  skills: string[];
}
