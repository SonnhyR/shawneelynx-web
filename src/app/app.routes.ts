import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Aethoris } from './obras/aethoris/aethoris';
import { HiddenInside } from './obras/hidden-inside/hidden-inside';
import { MercyOnMe } from './obras/mercy-on-me/mercy-on-me';
import { ProximamenteComponent } from './obras/proximamente/proximamente';
import { PoemComponent } from './obras/litharya/poem/poem';
import { LitharyaComponent } from './obras/litharya/litharya';
import { SongComponent } from './obras/litharya/song/song';
import { VoyageComponent } from './obras/litharya/voyage/voyage';
import { GameComponent } from './obras/litharya/game/game';
import { CureComponent } from './obras/litharya/cure/cure';
import { WorldbuildingComponent } from './obras/aethoris/worldbuilding/worldbuilding'; // ✅ Ruta corregida
import { AboutComponent } from './about/about';
import { SorteosComponent } from './sorteos/sorteos';
import { ShoppingComponent } from './shop/shop';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: AboutComponent },   
    { path: 'sorteos', component: SorteosComponent },
    { path: 'shop', component: ShoppingComponent},

    // Sagas Generales YA CREADAS
    { path: 'mundo-aethoris', component: Aethoris },
    { path: 'saga-hidden-inside', component: HiddenInside },
    { path: 'saga-mercy-on-me', component: MercyOnMe },

    // --- SUBMENUS EN MUNDO AETHORIS ---
    // Litharya (Mapa interactivo)
    { path: 'mundo-aethoris/litharya', component: LitharyaComponent },
    { path: 'mundo-aethoris/litharya/mapa', component: LitharyaComponent },
    
    // Libros de Litharya
    { path: 'mundo-aethoris/litharya/poem', component: PoemComponent },
    { path: 'mundo-aethoris/litharya/song', component: SongComponent },
    { path: 'mundo-aethoris/litharya/voyage', component: VoyageComponent },
    { path: 'mundo-aethoris/litharya/game', component: GameComponent },
    { path: 'mundo-aethoris/litharya/cure', component: CureComponent },
    
    // Worldbuilding / Glosario (DENTRO de aethoris)
    { path: 'mundo-aethoris/worldbuilding', component: WorldbuildingComponent },
    { path: 'mundo-aethoris/glosario', component: WorldbuildingComponent },
    
    // Otras sagas (Próximamente)
    { path: 'mundo-aethoris/drakkonia', component: ProximamenteComponent, data: { title: 'Saga Drakkonia' } },
    { path: 'mundo-aethoris/xylos', component: ProximamenteComponent, data: { title: 'Saga Xylos' } },
    { path: 'mundo-aethoris/tiriasis', component: ProximamenteComponent, data: { title: 'Saga Tiriasis' } },

    // --- KINTSUGI ---
    { path: 'obras/kintsugi', component: ProximamenteComponent, data: { title: 'Kintsugi' } },

    // --- SAGA LIE OR DIE ---
    { path: 'saga-lie-or-die/lie-or-die', component: ProximamenteComponent, data: { title: 'Lie or Die' } },
    { path: 'saga-lie-or-die/ride-or-die', component: ProximamenteComponent, data: { title: 'Ride or Die' } },
    { path: 'saga-lie-or-die/hit-and-run', component: ProximamenteComponent, data: { title: 'Hit and Run' } },
    { path: 'saga-lie-or-die/steal-and-stay', component: ProximamenteComponent, data: { title: 'Steal and Stay' } },

    // --- SUBMENUS SAGA HIDDEN INSIDE ---
    { path: 'saga-hidden-inside/scholomance', component: ProximamenteComponent, data: { title: 'Scholomance' } },
    { path: 'saga-hidden-inside/ascuns', component: ProximamenteComponent, data: { title: 'Ascuns' } },
    { path: 'saga-hidden-inside/revelatie', component: ProximamenteComponent, data: { title: 'Revelatie' } },

    // --- SUBMENUS SAGA MERCY ON ME (INFERNO) ---
    { path: 'saga-mercy-on-me/nueve-pecados', component: ProximamenteComponent, data: { title: 'Nueve Pecados' } },
    { path: 'saga-mercy-on-me/naraka', component: ProximamenteComponent, data: { title: 'Nueve Pecados II: NARAKA' } },

    // --- SAGA LOVE TIME MACHINE ---
    ...Array.from({ length: 14 }).map((_, i) => ({
        path: `saga-love-time/libro-${i + 1}`,
        component: ProximamenteComponent,
        data: { title: `Saga Love Time Machine - Libro ${i + 1}` }
    }))
];