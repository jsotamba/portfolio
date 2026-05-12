import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations } from '../../data/mock.data';
import { Heart, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly Heart = Heart;

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].footer;
  });

  constructor(private languageService: LanguageService) {}
}