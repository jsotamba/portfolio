import { Injectable, signal, effect } from '@angular/core';

type Language = 'it' | 'en' | 'es';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language = signal<Language>('it');

  constructor() {
    // Carica lingua salvata da localStorage
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang) {
      this.language.set(savedLang);
    }

    // Effect per salvare la lingua
    effect(() => {
      const currentLang = this.language();
      localStorage.setItem('language', currentLang);
    });
  }

  setLanguage(lang: Language): void {
    this.language.set(lang);
  }
}