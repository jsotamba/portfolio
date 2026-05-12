import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations, techStack } from '../../data/mock.data';
import { LucideAngularModule, icons } from 'lucide-angular';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent {
  techStack = techStack;
  icons = icons;

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].tech;
  });

  constructor(private languageService: LanguageService) {}

  getIcon(iconName: string): any {
    return (icons as any)[iconName];
  }

  getCategoryName(category: string): string {
    return (this.t().categories as any)[category];
  }
}