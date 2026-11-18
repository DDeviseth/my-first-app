import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';
import { Projects } from './projects/projects';
import { ThemeToggle } from './theme-toggle/theme-toggle';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Projects, ThemeToggle, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // The parent (App) owns all CV data and passes it down to the children.
  fullName = 'Kenaz Brian M. Yañez';
  location = 'Angeles City, Pampanga';
  email = 'yanezkenazbrian@gmail.com';
  phone = '0905 367 9140';

  profile = 'I’m a web development student in Angeles City who enjoys turning ideas into working interfaces. I’ve built a responsive marketing site for CEERIES and RestoRadar, a full-stack restaurant database app, and I’m now learning Angular to build more structured, component-based applications.';

  skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
    'Responsive Web Design',
    'UI/UX Design',
    'Frontend Development',
    'Database Management',
    'REST API Integration',
    'Problem Solving'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'HTML and CSS', level: 'Advanced' },
    { tool: 'JavaScript and TypeScript', level: 'Intermediate' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular', level: 'Beginner' },
    { tool: 'React', level: 'Beginner' },
    { tool: 'Figma', level: 'Intermediate' },
    { tool: 'MongoDB', level: 'Beginner' },
    { tool: 'Express.js', level: 'Beginner' },
    { tool: 'MySQL', level: 'Beginner' },
    { tool: 'Postman', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // The skill currently selected (empty = none). Projects filters by it.
  selectedSkill = '';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    if (skill === this.selectedSkill) {
      this.clearSkill();
      return;
    }
    this.selectedSkill = skill;
    this.message = `You selected: ${skill}`;
  }

  // Runs when the Projects component emits filterCleared.
  clearSkill() {
    this.selectedSkill = '';
    this.message = 'Click any skill above to select it.';
  }
}
