import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { translations, socialLinks, cvLinks } from '../../data/mock.data';
import { Send, FileDown, LucideAngularModule, icons } from 'lucide-angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  readonly Send = Send;
  readonly FileDown = FileDown;
  icons = icons;
  
  socialLinks = socialLinks;
  cvLinks = cvLinks;
  
  formData = {
    name: '',
    email: '',
    message: ''
  };

  t = computed(() => {
    const lang = this.languageService.language();
    return translations[lang].contact;
  });

  constructor(
    private languageService: LanguageService,
    private toastr: ToastrService
  ) {}

  getIcon(iconName: string): any {
    return (icons as any)[iconName];
  }

  onSubmit(): void {
    this.toastr.success('Ti risponderò al più presto.', 'Messaggio inviato!');
    this.formData = { name: '', email: '', message: '' };
  }

  downloadCV(cv: any): void {
    this.toastr.info(`${cv.label} CV`, 'Download CV');
  }
}