import { Component, HostListener, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { translations } from '../../data/mock.data';
import { Moon, Sun, Globe, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly Moon = Moon;
  readonly Sun = Sun;
  readonly Globe = Globe;

  scrolled = false;
  showLangDropdown = false;

  languages = [
    { code: 'it' as const, label: 'Italiano', flag: '🇮🇹' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
    { code: 'es' as const, label: 'Español', flag: '🇪🇸' }
  ];

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].nav;
  });

  constructor(
    public themeService: ThemeService,
    public languageService: LanguageService
  ) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.showLangDropdown = false;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLangDropdown(): void {
    this.showLangDropdown = !this.showLangDropdown;
  }

  setLanguage(lang: 'it' | 'en' | 'es'): void {
    this.languageService.setLanguage(lang);
    this.showLangDropdown = false;
  }
}