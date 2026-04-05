import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CelestialBody {
  name: string;
  type?: string;
  characteristic?: string;
  size?: string;
  orbit?: string;
  effect?: string;
  image: string;
}

@Component({
  selector: 'app-worldbuilding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worldbuilding.html',
  styleUrl: './worldbuilding.css'
})

export class WorldbuildingComponent {
  // Modal state
  modalOpen = false;
  selectedImage: string = '';
  selectedTitle: string = '';

  // Planet map interactivity
  hoveredContinent: string | null = null;

  setHoveredContinent(continent: string) {
    this.hoveredContinent = continent;
  }

  clearHoveredContinent() {
    this.hoveredContinent = null;
  }

  getActiveContColor(): string {
    const colors: Record<string, string> = {
      litharya: '#4C9A43',
      drakkonia: '#C0392B',
      xylos: '#1a8a8a',
      unknown: '#666'
    };
    return this.hoveredContinent ? (colors[this.hoveredContinent] ?? 'var(--primary-red)') : 'var(--primary-red)';
  }

  // Datos de los meses
  months = {
    winter: [
      { name: 'Syrus', equivalent: 'Enero', 
        desc: 'Corazón del invierno. Noches eternas y frío absoluto. En Cyrion, los ríos están completamente congelados.' },
      { name: 'Nirvana', equivalent: 'Febrero',
         desc: 'La Caída Blanca. Nevadas constantes. Viajar es casi imposible. Las familias se recluyen.' },
      { name: 'Thawen', equivalent: 'Marzo', 
        desc: 'El Primer Despertar. Los días comienzan a alargarse. El hielo empieza a derretirse.' }
    ],
    spring: [
      { name: 'Verdant', equivalent: 'Abril', desc: 'Lluvias constantes. Todo se vuelve verde. Nacen los animales. Inicio de la diplomacia.' },
      { name: 'Florae', equivalent: 'Mayo', desc: 'El Florecer. Clima perfecto. Festivales de fertilidad, amor y paz en todo el continente.' },
      { name: 'Jylvan', equivalent: 'Junio', desc: 'Corazón del Bosque. Vegetación en su máxima densidad. Energía vital en su pico.' }
    ],
    summer: [
      { name: 'Halo', equivalent: 'Julio', desc: 'Solsticio. El día más largo del año. Calor intenso. Grandes batallas campales.' },
      { name: 'Fervor', equivalent: 'Agosto', desc: 'El Calor Ardiente. El mes más caluroso. Tormentas de arena en Ulthor.' },
      { name: 'Aureus', equivalent: 'Septiembre', desc: 'La Luz Dorada. Comienza la cosecha. Ferias comerciales y tratados.' }
    ],
    autumn: [
      { name: 'Amber', equivalent: 'Octubre', desc: 'El Ámbar Caído. Hojas cambian a rojos y dorados. Mes de despedidas.' },
      { name: 'Windfyr', equivalent: 'Noviembre', desc: 'La Canción del Viento. Vientos fuertes. Perfecto para muertes y traiciones.' },
      { name: 'Umbra', equivalent: 'Diciembre', desc: 'La Sombra Larga. Días se acortan. Hogueras permanentes. Fin del año.' }
    ]
  };

  // Soles con imágenes
  suns: CelestialBody[] = [
    { name: 'Astros', type: 'Enana amarilla', 
        characteristic: 'Fuente principal de luz y calor. Rige el verano.', 
        image: '/assets/images/ASTROS.jpg' },
    { name: 'Asterion', type: 'Enana marrón', 
        characteristic: 'Más pequeña, menos calor. Domina el invierno.',
        image: '/assets/images/ASTERION.png' },
    { name: 'Éferion', type: 'Enana blanca', 
        characteristic: 'Más pequeña, luz más fría. Acompaña en primavera y verano.', 
        image: '/assets/images/EFERION.png' }
  ];

  // Lunas con imágenes
  moons: CelestialBody[] = [
    { name: 'Lumina', size: 'Grande', orbit: 'Brillo blanco intenso', effect: 'Ilumina la noche casi como un día', 
        image: '/assets/images/LUMINA.png' },
    { name: 'Varlen', size: 'Mediana', orbit: 'Brillo dorado', effect: 'Mareas extremas', 
        image: '/assets/images/VARLEN.jpg' },
    { name: 'Bonten', size: 'Pequeña', orbit: 'Brillo cobrizo', effect: 'Fertilidad de la tierra', 
        image: '/assets/images/BONTEN.png' },
    { name: 'Deros', size: 'Pequeña', orbit: 'Brillo rojizo', effect: 'Minerales más maleables', 
        image: '/assets/images/DEROS.jpg' },
    { name: 'Onny', size: 'Minúscula', orbit: 'Brillo opaco', effect: 'Ciclo corto, usado para medir tiempos', image: '/assets/images/ONNY.jpg' }
  ];

  openModal(image: string, title: string) {
    this.selectedImage = image;
    this.selectedTitle = title;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalOpen = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('document:keydown.escape')
  onEscapePress() {
    if (this.modalOpen) {
      this.closeModal();
    }
  }
}