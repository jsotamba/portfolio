import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations, projects } from '../../data/mock.data';
import { ExternalLink, Github, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  projects = projects;

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].projects;
  });

  constructor(private languageService: LanguageService) {}

  getDescription(project: any): string {
    const lang = this.languageService.language();
    return project.description[lang];
  }
}