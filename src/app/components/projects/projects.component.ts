import { Component, computed, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations, projects } from '../../data/mock.data';
import { ExternalLink, Github, LucideAngularModule } from 'lucide-angular';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../../models/portfolio.model';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  projects: Project[] = projects;

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].projects;
  });

  constructor(private languageService: LanguageService) {}

  ngAfterViewInit(): void {
    ScrollTrigger.create({
      trigger: '#projects',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          '.project-card',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
          },
        );
      },
    });
  }

  getDescription(project: Project): string {
    const lang = this.languageService.language();
    return project.description[lang as keyof typeof project.description];
  }
}
