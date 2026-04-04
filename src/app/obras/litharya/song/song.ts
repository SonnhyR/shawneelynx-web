import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Character {
    name: string;
    img: string;
    desc: string;
    objectPos?: string;
}

@Component({
    selector: 'app-song',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './song.html',
    styleUrls: ['./song.css']
})
export class SongComponent implements OnInit {
    title: string = 'Serendipity Song';

    // Datos de personajes (comentados - disponibles para uso futuro)
    /*
    protagonistas: Character[] = [
        { name: 'Personaje 1', img: '/assets/images/song.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { name: 'Personaje 2', img: '/assets/images/song.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
    ];

    secundarios: Character[] = [
        { name: 'Personaje 3', img: '/assets/images/song.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.' },
        { name: 'Personaje 4', img: '/assets/images/song.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.', objectPos: 'top center' }
    ];
    */

    constructor() { }

    ngOnInit() { }
}