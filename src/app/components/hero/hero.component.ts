import {
  Component,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations } from '../../data/mock.data';
import {
  ArrowRight,
  Download,
  ChevronDown,
  LucideAngularModule,
} from 'lucide-angular';
import { gsap } from 'gsap';
import Typed from 'typed.js';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('typedEl') typedEl!: ElementRef;

  readonly ArrowRight = ArrowRight;
  readonly Download = Download;
  readonly ChevronDown = ChevronDown;

  readonly techBadges = [
    'Java 21',
    'Spring',
    'Angular',
    'Python',
    'Azure',
    'AWS',
    'Kafka',
    'Microservices',
    'REST APIs',
  ];

  private typedInstance?: Typed;
  private animationFrameId?: number;
  private particles: Particle[] = [];
  private resizeHandler?: () => void;

  readonly rolesByLang: Record<string, string[]> = {
    it: [
      'Fullstack Developer',
      'Backend Engineer',
      'Cloud Developer',
      'Microservices Expert',
      'Enterprise Software Eng.',
    ],
    en: [
      'Fullstack Developer',
      'Backend Engineer',
      'Cloud Developer',
      'Microservices Expert',
      'Enterprise Software Eng.',
    ],
    es: [
      'Desarrollador Fullstack',
      'Ingeniero Backend',
      'Cloud Developer',
      'Experto Microservicios',
      'Ing. Software Enterprise',
    ],
  };

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].hero;
  });

  constructor(private languageService: LanguageService) {}

  ngAfterViewInit(): void {
    this.initCanvas();
    this.initTyped();
    this.animateEntrance();
  }

  ngOnDestroy(): void {
    this.typedInstance?.destroy();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  private initTyped(): void {
    const lang = this.languageService.language();
    this.typedInstance = new Typed(this.typedEl.nativeElement, {
      strings: this.rolesByLang[lang] ?? this.rolesByLang['en'],
      typeSpeed: 65,
      backSpeed: 40,
      loop: true,
      backDelay: 2200,
      startDelay: 800,
    });
  }

  private animateEntrance(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-greeting', { opacity: 0, y: 30, duration: 0.7 })
      .from('.hero-name', { opacity: 0, y: 50, duration: 0.9 }, '-=0.4')
      .from('.hero-role', { opacity: 0, y: 30, duration: 0.7 }, '-=0.5')
      .from('.hero-description', { opacity: 0, y: 25, duration: 0.7 }, '-=0.4')
      .from(
        '.hero-cta-btn',
        { opacity: 0, y: 20, duration: 0.5, stagger: 0.12 },
        '-=0.3',
      )
      .from(
        '.hero-badge',
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          stagger: 0.06,
          ease: 'back.out(1.7)',
        },
        '-=0.2',
      )
      .from('.hero-scroll', { opacity: 0, duration: 0.5 }, '-=0.1');

    gsap.from('.hero-avatar-wrap', {
      opacity: 0,
      scale: 0.85,
      duration: 1.1,
      ease: 'back.out(1.4)',
      delay: 0.2,
    });
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    this.resizeHandler = resize;
    window.addEventListener('resize', resize);

    this.particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.45 + 0.15,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const p = this.particles[i];
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6,182,212,${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw & move particles
      this.particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${p.opacity})`;
        ctx.fill();
      });

      this.animationFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  scrollToSection(id: string): void {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
