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
import { translations } from '../../data/mock.data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CountUp } from 'countup.js';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('counterEl') counterEls!: QueryList<ElementRef>;

  readonly focusAreas = [
    {
      icon: '🏛️',
      titleIt: 'Enterprise Development',
      titleEn: 'Enterprise Development',
      titleEs: 'Desarrollo Enterprise',
      desc: 'Java 21 · Spring · Microservices · REST APIs',
      color: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/30',
    },
    {
      icon: '☁️',
      titleIt: 'Cloud Architecture',
      titleEn: 'Cloud Architecture',
      titleEs: 'Arquitectura Cloud',
      desc: 'Azure · AWS Lambda · Serverless · CloudFormation',
      color: 'from-blue-500/20 to-indigo-500/10',
      border: 'border-blue-500/30',
    },
    {
      icon: '⚙️',
      titleIt: 'Legacy Modernization',
      titleEn: 'Legacy Modernization',
      titleEs: 'Modernización Legacy',
      desc: 'Migration · Refactoring · Framework Upgrades',
      color: 'from-indigo-500/20 to-purple-500/10',
      border: 'border-indigo-500/30',
    },
    {
      icon: '🔗',
      titleIt: 'Full Stack Engineering',
      titleEn: 'Full Stack Engineering',
      titleEs: 'Ingeniería Full Stack',
      desc: 'Angular · TypeScript · Java · Python',
      color: 'from-purple-500/20 to-pink-500/10',
      border: 'border-purple-500/30',
    },
  ];

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].about;
  });

  getLang = computed(() => this.languageService.language());

  constructor(private languageService: LanguageService) {}

  ngAfterViewInit(): void {
    this.initScrollAnimations();
    this.initCounters();
  }

  private initScrollAnimations(): void {
    gsap.from('.about-text', {
      scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from('.focus-card', {
      scrollTrigger: { trigger: '.focus-card', start: 'top 80%' },
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
    });

    gsap.from('.stat-card', {
      scrollTrigger: { trigger: '.stat-card', start: 'top 85%' },
      opacity: 0,
      scale: 0.85,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.5)',
    });
  }

  private initCounters(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const value = parseInt(el.dataset['value'] ?? '0', 10);
            const suffix = el.dataset['suffix'] ?? '';
            const cu = new CountUp(el, value, {
              duration: 2.5,
              suffix,
              useEasing: true,
            });
            if (!cu.error) cu.start();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 },
    );

    this.counterEls.forEach((el) => observer.observe(el.nativeElement));
  }

  getFocusTitle(area: (typeof this.focusAreas)[0]): string {
    const lang = this.getLang();
    if (lang === 'it') return area.titleIt;
    if (lang === 'es') return area.titleEs;
    return area.titleEn;
  }
}
