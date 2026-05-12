import {
  Component,
  computed,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations, experiences } from '../../data/mock.data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  LucideAngularModule,
} from 'lucide-angular';
import { Experience } from '../../models/portfolio.model';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChildren('expCard') expCards!: QueryList<ElementRef>;

  readonly MapPin = MapPin;
  readonly ChevronDown = ChevronDown;
  readonly ChevronUp = ChevronUp;

  experiences: Experience[] = experiences;
  expandedIds = new Set<number>();

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].experience;
  });

  constructor(private languageService: LanguageService) {}

  ngAfterViewInit(): void {
    // Animate cards in as they scroll into view
    gsap.from('.exp-card', {
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 75%',
      },
      opacity: 0,
      x: -60,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Animate the timeline line growing
    gsap.from('.timeline-line', {
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 70%',
      },
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1.2,
      ease: 'power2.inOut',
    });
  }

  toggleExpand(id: number): void {
    if (this.expandedIds.has(id)) {
      this.expandedIds.delete(id);
    } else {
      this.expandedIds.add(id);
    }
  }

  isExpanded(id: number): boolean {
    return this.expandedIds.has(id);
  }

  formatDate(dateStr: string | null): string {
    if (!dateStr) return this.t().present;
    const [year, month] = dateStr.split('-');
    const lang = this.languageService.language();
    const months: Record<string, string[]> = {
      it: [
        'Gen',
        'Feb',
        'Mar',
        'Apr',
        'Mag',
        'Giu',
        'Lug',
        'Ago',
        'Set',
        'Ott',
        'Nov',
        'Dic',
      ],
      en: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      es: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
    };
    return `${months[lang][parseInt(month) - 1]} ${year}`;
  }

  getDescription(exp: Experience): string {
    const lang = this.languageService.language();
    return exp.description[lang as keyof typeof exp.description];
  }

  isCurrentRole(exp: Experience): boolean {
    return exp.period.end === null;
  }
}
