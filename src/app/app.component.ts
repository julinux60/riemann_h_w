import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic_hw';

  constructor(private location: Location) { }

  getServerUrl(): string {
    return window.location.origin; // Cela renvoie "http://ipServeur"
  }

  switchLanguage(lang: string): void {
    let currentPath = window.location.pathname; // ex: /fr/home
    const newPath = currentPath.replace(/^\/(fr|en)/, `/${lang}`);
    window.location.href = `${window.location.origin}${newPath}`;
  }

  getCurrentLanguage(): string {
    const match = window.location.pathname.match(/^\/(fr|en)/);
    return match ? match[1] : 'fr'; // Retourne 'en' par défaut si aucune langue n'est trouvée
  }
}