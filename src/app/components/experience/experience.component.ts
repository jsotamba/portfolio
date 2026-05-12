import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations, experiences } from '../../data/mock.data';
import { MapPin, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  readonly MapPin = MapPin;
  experiences = experiences;

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].experience;
  });

  constructor(private languageService: LanguageService) {}

  formatDate(dateStr: string | null): string {
    if (!dateStr) return this.t().present;
    
    const [year, month] = dateStr.split('-');
    const lang = this.languageService.language();
    
    const months: Record<string, string[]> = {
      it: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
      en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    };
    
    return `${months[lang][parseInt(month) - 1]} ${year}`;
  }

  getDescription(exp: any): string {
    const lang = this.languageService.language();
    return exp.description[lang];
  }
}