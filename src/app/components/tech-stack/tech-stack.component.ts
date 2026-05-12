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

  get categoryTabs(): Array<{ key: string; label: string }> {
    const cats = this.t().categories as Record<string, string>;
    const tabs = [{ key: 'all', label: 'All' }];
    Object.entries(cats).forEach(([key, label]) => {
      tabs.push({ key, label: label as string });
    });
    return tabs;
  }

  get filteredStack() {
    const cat = this.activeCategory();
    if (cat === 'all') return this.allCategories;
    return this.allCategories.filter((c) => c.category === cat);
  }

  constructor(private languageService: LanguageService) {}

  ngAfterViewInit(): void {
    this.animateBadges();
  }

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
    // Re-animate on tab switch
    setTimeout(() => this.animateBadges(), 50);
  }

  private animateBadges(): void {
    gsap.from('.tech-badge', {
      scrollTrigger: { trigger: '#tech', start: 'top 80%' },
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 0.4,
      stagger: 0.04,
      ease: 'back.out(1.4)',
    });
  }

  getIcon(iconName: string): any {
    return (icons as any)[iconName] ?? (icons as any)['Code'];
  }

  getCategoryName(category: string): string {
    return (this.t().categories as any)[category] ?? category;
  }
}
