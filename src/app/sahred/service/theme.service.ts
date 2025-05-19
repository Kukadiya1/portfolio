import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public darkMode = false;
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark') {
      this.setDarkMode(true);
    } else if (savedTheme === 'light') {
      this.setDarkMode(false);
    } else {
      this.setDarkMode(prefersDark);
    }
  }

  private updateDOM(): void {
    if (this.darkMode) {
      this.renderer.addClass(this.document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(this.document.documentElement, 'dark');
    }
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }

  toggleTheme(): void {
    this.setDarkMode(!this.darkMode);
  }

  setDarkMode(value: boolean): void {
    this.darkMode = value;
    this.updateDOM();
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
