import { Component, computed, inject, input, output, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  imports: [UpperCasePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  // Dependency injection: the component asks for the service instead of creating it.
  private projectsService = inject(ProjectsService);

  // Input: the skill the user clicked in <app-skills> (empty = no skill filter).
  skillFilter = input('');

  // Output: tells the parent the user cleared the skill filter.
  filterCleared = output<void>();

  // Signals: local state of this component.
  query = signal('');
  expandedId = signal<number | null>(null);

  projects = this.projectsService.getProjects();

  // computed(): recalculates automatically when skillFilter() or query() changes.
  filtered = computed(() => {
    const skill = this.skillFilter().toLowerCase();
    const q = this.query().trim().toLowerCase();

    return this.projects.filter((p) => {
      const matchesSkill = !skill || p.skills.some((s) => s.toLowerCase() === skill);
      const matchesQuery =
        !q || p.name.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q);
      return matchesSkill && matchesQuery;
    });
  });

  onSearch(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }

  toggle(id: number) {
    this.expandedId.update((current) => (current === id ? null : id));
  }

  clearFilter() {
    this.query.set('');
    this.filterCleared.emit();
  }
}
