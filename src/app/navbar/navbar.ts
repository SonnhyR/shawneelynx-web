import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  // Estado del menú móvil
  isMenuOpen = false;
  
  // Estado de los dropdowns
  isBooksDropdownOpen = false;
  isSocialDropdownOpen = false;

  /**
   * Alterna el menú hamburguesa en móvil
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Alterna el dropdown de Libros (solo en móvil)
   */
  toggleDropdown(event: MouseEvent): void {
    event.preventDefault();
    if (window.innerWidth <= 768) {
      this.isBooksDropdownOpen = !this.isBooksDropdownOpen;
      this.isSocialDropdownOpen = false; // Cierra el otro dropdown
    }
  }

  /**
   * Alterna el dropdown de Redes Sociales (solo en móvil)
   */
  toggleSocialDropdown(event: MouseEvent): void {
    event.preventDefault();
    if (window.innerWidth <= 768) {
      this.isSocialDropdownOpen = !this.isSocialDropdownOpen;
      this.isBooksDropdownOpen = false; // Cierra el otro dropdown
    }
  }

  /**
   * Cierra los menús cuando se hace click fuera del navbar
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar')) {
      this.isBooksDropdownOpen = false;
      this.isSocialDropdownOpen = false;
      this.isMenuOpen = false;
    }
  }

  /**
   * Cierra los dropdowns cuando la ventana cambia de tamaño
   */
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 768) {
      this.isBooksDropdownOpen = false;
      this.isSocialDropdownOpen = false;
      this.isMenuOpen = false;
    }
  }
}