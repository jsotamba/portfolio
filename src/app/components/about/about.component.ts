import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations } from '../../data/mock.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].about;
  });

  constructor(private languageService: LanguageService) {}
}