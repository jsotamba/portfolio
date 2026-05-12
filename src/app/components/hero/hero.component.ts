import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations } from '../../data/mock.data';
import { ArrowRight, Download, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  readonly ArrowRight = ArrowRight;
  readonly Download = Download;

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].hero;
  });

  constructor(private languageService: LanguageService) {}

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}