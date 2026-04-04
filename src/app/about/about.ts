import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, Footer],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  // Puedes cambiar la ruta de la imagen por una real
  profileImage: string = '/assets/images/about-photo.jpg';
} 