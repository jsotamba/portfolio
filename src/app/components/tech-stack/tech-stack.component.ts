import { Component, computed, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations, techStack } from '../../data/mock.data';
import { LucideAngularModule, icons } from 'lucide-angular';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
})
export class TechStackComponent implements AfterViewInit {
  allCategories = techStack;
  icons = icons;

  activeCategory = signal<string>('all');

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].tech;
  });

  // computed() signal so Angular tracks reactivity properly
  categoryTabs = computed(() => {
    const cats = this.t().categories as Record<string, string>;
    const tabs: Array<{ key: string; label: string }> = [
      { key: 'all', label: 'All' },
    ];
    Object.entries(cats).forEach(([key, label]) => {
      tabs.push({ key, label: label as string });
    });
    return tabs;
  });

  filteredStack = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.allCategories;
    return this.allCategories.filter((c) => c.category === cat);
  });

  constructor(private languageService: LanguageService) {}

  ngAfterViewInit(): void {
    // Use onEnter so elements stay visible until section scrolls into view
    ScrollTrigger.create({
      trigger: '#tech',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          '.tech-badge',
          { opacity: 0, y: 20, scale: 0.88 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: 'back.out(1.4)',
          },
        );
      },
    });
  }

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
    // Animate new badges in without ScrollTrigger (section already visible)
    setTimeout(() => {
      gsap.killTweensOf('.tech-badge');
      gsap.fromTo(
        '.tech-badge',
        { opacity: 0, y: 16, scale: 0.88 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          stagger: 0.04,
          ease: 'back.out(1.5)',
        },
      );
    }, 20);
  }

  getIcon(iconName: string): any {
    return (icons as any)[iconName] ?? (icons as any)['Code'];
  }

  getCategoryName(category: string): string {
    return (this.t().categories as any)[category] ?? category;
  }
}
