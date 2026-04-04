import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Realm {
  id: string;
  name: string;
  title: string;
  description: string;
  reyes: string;
  principes: string[];
  capital: string;
  castillo: string;
  ciudades: string;
  recurso: string;
  ropa: string;
  colorHex: string;
}

@Component({
  selector: 'app-litharya',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './litharya.html',
  styleUrl: './litharya.css'
})
export class LitharyaComponent {
  realms: Record<string, Realm> = {
    cyrion: {
      id: 'cyrion',
      name: 'Cyrion',
      title: 'El Reino de Hielo',
      description: 'Gélidas montañas y paisajes blancos donde la supervivencia forja acero. Sus lagos y cascadas escarchadas ocultan magia pura.',
      reyes: 'Rey: Jodrerth. Reina consorte: Zuma.',
      principes: ['Príncipe Eirik (Heredero, 35)', 'Príncipe Lysander (30)', 'Príncipe Kaelan (27)'],
      capital: 'Elensári',
      castillo: 'Evensong',
      ciudades: 'Aquartharra, Thelynor.',
      recurso: 'Agua dulce, hielo, agua curativa',
      ropa: 'Kimono',
      colorHex: '#275D9E' // Azul
    },
    aeloreas: {
      id: 'aeloreas',
      name: 'Aeloreas',
      title: 'El Reino del Bosque',
      description: 'Una inmensa jungla ancestral y vegetación desbordante. Sus árboles monumentales protegen las tradiciones vivas de sus ancestros.',
      reyes: 'Rey: Khallik. Reina: Evanna (Fallecida)',
      principes: ['Príncipe Evenny (Heredero, 29)', 'Princesa Rhiannon (21)', 'Princesa Lyra (14)', 'Princesa Elara (14)'],
      capital: 'Embereth',
      castillo: 'Elbereth',
      ciudades: 'Aetheria, Isilmereth, Virell, Solarae, Boreas.',
      recurso: 'Tierras altamente fértiles todo el año',
      ropa: 'Hanfu',
      colorHex: '#3D7A41' // Verde
    },
    ulthor: {
      id: 'ulthor',
      name: 'Ulthor',
      title: 'El Reino del Desierto',
      description: 'Dunas inmensas y calor abrasador bajo un sol implacable. En su corazón florece la cultura más ostentosa, militar y ardiente.',
      reyes: 'Rey: Frederard. Rey consorte: Ozymandias.',
      principes: ['Príncipe Malik (Heredero, 31)', 'Príncipe Elgor (Comandante, 30)', 'Princesa Soren (Bailarina, 27)', 'Princesa Soriq (Bailarina, 27)', 'Princesa Tariq (Capitana, 27)', 'Príncipe Razvan (Estratega, 26)', 'Príncipe Kaid (Médico, 25)', 'Príncipe Cassien (Intelectual, 18)', 'Princesa Lykya (15)', 'Princesa Amyara (10)'],
      capital: 'Draksgard',
      castillo: 'Sylvaris',
      ciudades: 'Dunhagard, Sinocco, Fergard, Jikagard, Vingard.',
      recurso: 'Cristales de Sol / Sahita Valcum',
      ropa: 'Chut Thai, quitón, dishdasha',
      colorHex: '#C59533' // Dorado
    },
    vespera: {
      id: 'vespera',
      name: 'Vespera',
      title: 'El Reino de Hierro',
      description: 'Tierra oscura de cumbres afiladas, minas profundas y ríos de magma. El progreso industrial ruge entre sus murallas grises.',
      reyes: 'Reina: Varyel. Rey consorte: Baaragor.',
      principes: ['Princesa Elidriel (Melliza)', 'Príncipe Ithandriel (Mellizo, 26)'],
      capital: 'Vespera',
      castillo: 'Stoneharbor',
      ciudades: 'Veridia, Vinilia, Volara, Vyslumvra.',
      recurso: 'Vesperanita (Vesperanium) y Ferronita',
      ropa: 'Ao Dai',
      colorHex: '#525252' // Gris oscuro/Hierro
    },
    valeroth: {
      id: 'valeroth',
      name: 'Valeroth',
      title: 'Centro del Continente',
      description: 'El terreno sagrado y neurálgico que une a los cuatro reinos, custodio del conocimiento absoluto.',
      reyes: 'Gobernante: Lord Canciller Eirik de C.',
      principes: [],
      capital: 'Valeroth',
      castillo: 'Aethelburg',
      ciudades: 'Ciudad Central Sagrada',
      recurso: 'Gran biblioteca',
      ropa: 'Vestiduras académicas neutrales',
      colorHex: '#ffffff'
    }
  };

  activeRealm: Realm | null = null;
  hoveredRealmId: string | null = null;

  setHoverRealm(realmId: string) {
    this.hoveredRealmId = realmId;
    this.activeRealm = this.realms[realmId];
  }

  clearHoverRealm() {
    this.hoveredRealmId = null;
    this.activeRealm = null;
  }
}
